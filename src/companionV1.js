import React from 'react';
import './companion.css';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    PseudoBox,
    SimpleGrid,
    Stack,
    Text
} from "@chakra-ui/core";
import {getColor, getDependant, getPointsUsed, getSummary, sort} from './Utils'
import constellations from './constellations'
import {CardLayout, getHeader} from "./ui";

export default class CompanionV1 extends React.Component {

    constructor(props) {
        super(props);
        const save = JSON.parse(localStorage.getItem("save"));
        if (save) {
            this.state = {
                constellations: save.data,
                resources: save.resources,
                pathHistory: save.pathHistory,
                pathSize: save.pathSize,
            }
        } else {
            this.state = {
                constellations: constellations.map(obj => ({
                    name: obj.name,
                    points: obj.points,
                    requirements: obj.requirements,
                    rewards: obj.rewards,
                    imageSrc: obj.imageSrc,
                    description: obj.description,
                    isSelected: false,
                    isGoal: false
                })),
                resources: {
                    ascendant: 0,
                    chaos: 0,
                    eldritch: 0,
                    order: 0,
                    primordial: 0,
                    ascendantG: 0,
                    chaosG: 0,
                    eldritchG: 0,
                    orderG: 0,
                    primordialG: 0
                },
                pathHistory: "",
                pathSize: 0,
                searchText: ""
            }
        }
    }

    render() {
        return (
            <this.ConstellationGrid/>
        );
    }

    ConstellationGrid = () => {
        const resources = this.state.resources;
        let data = sort(this.state.constellations, resources)
            .filter(constellation => this.state.searchText ? constellation.name.toLowerCase().includes(this.state.searchText) || constellation.description.toLowerCase().includes(this.state.searchText) : true);
        let pathHistory = this.state.pathHistory;
        let pathSize = this.state.pathSize;

        const onAddItemClicked = (constellation) => {
            if (getPointsUsed(data) + constellation.points <= 55) {
                addRes(constellation);
                constellation.isSelected = true;
                pathHistory += (this.state.pathSize + 1) + ": Add " + constellation.name + "\n";
                pathSize += 1;
                this.setState({
                    //constellations: data, // THIS CAUSED THE SEARCH BUG
                    resources: resources,
                    pathHistory: pathHistory,
                    pathSize: pathSize
                });
                save(); 
            } else {
                alert("You don't have enough points to add this devotion. Remove another one first.");
            }
        };

        const addGoals = (constellation) => {
            if (constellation.requirements.ascendant > resources.ascendantG)
            {
                resources.ascendantG = constellation.requirements.ascendant;
            }
            if (constellation.requirements.chaos > resources.chaosG)
            {
                resources.chaosG = constellation.requirements.chaos;
            }
            if (constellation.requirements.eldritch > resources.eldritchG)
            {
                resources.eldritchG = constellation.requirements.eldritch;
            }
            if (constellation.requirements.order > resources.orderG)
            {
                resources.orderG = constellation.requirements.order;
            }
            if (constellation.requirements.primordial > resources.primordialG)
            {
                resources.primordialG = constellation.requirements.primordial;
            }
        };

        const onGoalClicked = (constellation) => {
            addGoals(constellation);
            constellation.isGoal = true;
            this.setState({
                //constellations: data, // THIS CAUSED THE SEARCH BUG
                resources: resources,
                pathHistory: pathHistory,
                pathSize: pathSize
            });
            save();
        };

        const resetGoals = () => {
            resources.ascendantG = 0;
            resources.chaosG = 0;
            resources.eldritchG = 0;
            resources.orderG = 0;
            resources.primordialG = 0;
            const goaled = this.state.constellations.filter(co => co.isGoal)
            goaled.forEach(co => {
                addGoals(co);
            });
        };

        const onGoalRemoved = (constellation) => {
            constellation.isGoal = false;
            resetGoals();
            this.setState({
                // constellations: data,
                resources: resources,
                pathHistory: pathHistory,
                pathSize: pathSize
            });
            save();
        };

        const addRes = (constellation) => {
            resources.ascendant += constellation.rewards.ascendant ? constellation.rewards.ascendant : 0;
            resources.chaos += constellation.rewards.chaos ? constellation.rewards.chaos : 0;
            resources.eldritch += constellation.rewards.eldritch ? constellation.rewards.eldritch : 0;
            resources.order += constellation.rewards.order ? constellation.rewards.order : 0;
            resources.primordial += constellation.rewards.primordial ? constellation.rewards.primordial : 0;
        };

        const onRemoveItemClicked = (constellation) => {
            const dependant = getDependant(resources, data, constellation);
            if (dependant === "") {
                resources.ascendant -= constellation.rewards.ascendant ? constellation.rewards.ascendant : 0;
                resources.chaos -= constellation.rewards.chaos ? constellation.rewards.chaos : 0;
                resources.eldritch -= constellation.rewards.eldritch ? constellation.rewards.eldritch : 0;
                resources.order -= constellation.rewards.order ? constellation.rewards.order : 0;
                resources.primordial -= constellation.rewards.primordial ? constellation.rewards.primordial : 0;

                constellation.isSelected = false;

                pathHistory += (this.state.pathSize + 1) + ": Remove " + constellation.name + "\n";
                pathSize += 1;
                this.setState({
                    // constellations: data,
                    resources: resources,
                    pathHistory: pathHistory,
                    pathSize: pathSize
                });
                save();
            } else {
                alert("Cannot remove. The following devotions depend on this: \n" + dependant);
            }
        };

        const onReset = () => {
            data.forEach((item) => {
                item.isSelected = false
                item.isGoal = false
            });
            resources.ascendant = 0;
            resources.chaos = 0;
            resources.eldritch = 0;
            resources.order = 0;
            resources.primordial = 0;
            resources.ascendantG = 0;
            resources.chaosG = 0;
            resources.eldritchG = 0;
            resources.orderG = 0;
            resources.primordialG = 0;
            pathHistory = "";
            pathSize = 0;
            this.setState({
                constellations: data,
                resources: resources,
                pathHistory: pathHistory,
                pathSize: pathSize
            });
            save()
        };

        const showSummary = () => {
            this.setState({
                showSummary: true
            });
        };

        const onSearch = (searchText) => {
            this.setState({
                searchText: searchText
            });
        };

        const listener = {
            reset: onReset,
            showSummary: showSummary,
            onSearch: onSearch
        };

        const save = () => {
            localStorage.setItem("save",
                JSON.stringify({
                    data: data,
                    resources: resources,
                    pathHistory: pathHistory,
                    pathSize: pathSize
                }));
        };

        return (
            <Stack
                h="100%"
                bg="#a8bdb9">
                {
                    getHeader(this.state.resources, getPointsUsed(data), listener, this.state.searchText)
                }
                <SimpleGrid
                    p={16}
                    minChildWidth="300px"
                    spacing="20px">
                    {
                        data.map(constellation => {
                            return (
                                <PseudoBox
                                    bg={
                                        getColor(constellation, this.state.resources)
                                    }
                                    maxW="sm"
                                    w="350px"
                                    borderWidth="1px"
                                    rounded="md"
                                    overflow="hidden"
                                    _hover={{
                                        shadow: "lg",
                                    }}
                                    _active={{
                                        shadow: "none",
                                    }}>
                                    {
                                        CardLayout(constellation, resources, onAddItemClicked, onRemoveItemClicked, onGoalClicked, onGoalRemoved)
                                    }
                                </PseudoBox>
                            )
                        })
                    }
                </SimpleGrid>
                <Modal isOpen={this.state.showSummary} onClose={
                    () => {
                        this.setState({
                            showSummary: false
                        })
                    }
                }>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Summary</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            {
                                getSummary(data, resources, this.state.pathHistory).split('\n').map(line => {
                                    return (
                                        <Text px={4}>
                                            {line}
                                        </Text>
                                    )
                                })
                            }
                        </ModalBody>

                        <ModalFooter>
                            <Button variantColor="blue" mr={3} onClick={
                                () => {
                                    this.setState({
                                        showSummary: false
                                    })
                                }
                            }>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>
        );
    }
}