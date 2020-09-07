import {
    Button,
    ButtonGroup,
    Flex,
    Icon,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text
} from "@chakra-ui/core";
import React from "react";
import {ascendantImg, chaosImg, eldritchImg, imgBg, orderImg, primordialImg} from "./constants";
import {isAvailable, hasRequirements} from "./Utils";

export function CardLayout(constellation, resources, onAddItemClicked, onRemoveItemClicked, onGoalClicked, onGoalRemoved) {
    return (
        <Stack>
            <Text textAlign={[ 'left', 'center' ]}>
                {constellation.name} (Points: {constellation.points})
            </Text>
            <Tabs isFitted variant="enclosed">
                <TabList>
                    <Tab  _selected={{ color: "white", bg: "blue.500"}}> Image </Tab>
                    <Tab _selected={{ color: "white", bg: "blue.500"}}> Description </Tab>
                </TabList>
            <TabPanels>
                <TabPanel>
                    <Image size="350px" style={{
                    backgroundImage: imgBg,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} src={constellation.imageSrc}/>
                </TabPanel>
                <TabPanel bg={"gray.200"}> {
                                constellation.description.split('\n').filter(function (el) {
                                    return el !== "";
                                }).map(line => {
                                    return (
                                        <Text px={4}>
                                            {line}
                                        </Text>
                                    )
                                })
                            } 
                </TabPanel>
            </TabPanels>
            </Tabs>
            {
                <Stack isInline w="100%" align={"center"}>
                    <Text pl={4}>
                        Required:
                    </Text>
                    {
                        constellation.requirements.ascendant &&
                        <Image w="24px" py={2} pl={4} src={ascendantImg}/>
                    }
                    {
                        constellation.requirements.ascendant &&
                        <Text>
                            {constellation.requirements.ascendant}
                        </Text>
                    }
                    {
                        constellation.requirements.chaos &&
                        <Image w="24px" py={2} pl={4} src={chaosImg}/>
                    }
                    {
                        constellation.requirements.chaos &&
                        <Text>
                            {constellation.requirements.chaos}
                        </Text>
                    }
                    {
                        constellation.requirements.eldritch &&
                        <Image w="24px" py={2} pl={4} src={eldritchImg}/>
                    }
                    {
                        constellation.requirements.eldritch &&
                        <Text>
                            {constellation.requirements.eldritch}
                        </Text>
                    }
                    {
                        constellation.requirements.order &&
                        <Image w="24px" py={2} pl={4} src={orderImg}/>
                    }
                    {
                        constellation.requirements.order &&
                        <Text>
                            {constellation.requirements.order}
                        </Text>
                    }
                    {
                        constellation.requirements.primordial &&
                        <Image w="24px" py={2} pl={4} src={primordialImg}/>
                    }
                    {
                        constellation.requirements.primordial &&
                        <Text>
                            {constellation.requirements.primordial}
                        </Text>
                    }
                </Stack>
            }

            {
                <Stack isInline w="100%" align={"center"}>
                    <Text pl={4}>
                        Rewards:
                    </Text>
                    {
                        constellation.rewards.ascendant &&
                        <Image w="24px" py={2} pl={4} src={ascendantImg}/>
                    }
                    {
                        constellation.rewards.ascendant &&
                        <Text>
                            {constellation.rewards.ascendant}
                        </Text>
                    }
                    {
                        constellation.rewards.chaos &&
                        <Image w="24px" py={2} pl={4} src={chaosImg}/>
                    }
                    {
                        constellation.rewards.chaos &&
                        <Text>
                            {constellation.rewards.chaos}
                        </Text>
                    }
                    {
                        constellation.rewards.eldritch &&
                        <Image w="24px" py={2} pl={4} src={eldritchImg}/>
                    }
                    {
                        constellation.rewards.eldritch &&
                        <Text>
                            {constellation.rewards.eldritch}
                        </Text>
                    }
                    {
                        constellation.rewards.order &&
                        <Image w="24px" py={2} pl={4} src={orderImg}/>
                    }
                    {
                        constellation.rewards.order &&
                        <Text>
                            {constellation.rewards.order}
                        </Text>
                    }
                    {
                        constellation.rewards.primordial &&
                        <Image w="24px" py={2} pl={4} src={primordialImg}/>
                    }
                    {
                        constellation.rewards.primordial &&
                        <Text>
                            {constellation.rewards.primordial}
                        </Text>
                    }
                </Stack>
            }
            {
            <Stack align={"center"} zIndex={1}>
                <ButtonGroup>
                    {isAvailable(constellation.requirements, resources) && !constellation.isSelected &&
                        <Button onClick={() => onAddItemClicked(constellation)} size="lg"> Select </Button> }
                    {constellation.isSelected &&
                        <Button onClick={() => onRemoveItemClicked(constellation)} size="lg"> Remove </Button> }
                    {!constellation.isGoal && hasRequirements(constellation) &&
                    <Button onClick={() => onGoalClicked(constellation)} size="lg"> Make Goal </Button> }
                    { constellation.isGoal &&
                    <Button onClick={() => onGoalRemoved(constellation)} size="lg"> Remove Goal </Button> }
                </ButtonGroup>
            </Stack>
            }
        </Stack>
    )
}

export function getHeader(resources, pointsUsed, listener) {
    return (
        <Stack background={"grey"} shadow="md" align={"center"} style={{
            position: "sticky",
            top: "0",
            zIndex: 1000
        }}>
            <Stack isInline w="100%" align={"center"}>
                <Text pl={4}> Current: </Text>
                <Image py={2} pl={4} src={ascendantImg}/>
                <Text>
                    {resources.ascendant}
                </Text>
                <Image py={2} pl={4} src={chaosImg}/>
                <Text>
                    {resources.chaos}
                </Text>
                <Image py={2} pl={4} src={eldritchImg}/>
                <Text>
                    {resources.eldritch}
                </Text>
                <Image py={2} pl={4} src={orderImg}/>
                <Text>
                    {resources.order}
                </Text>
                <Image py={2} pl={4} src={primordialImg}/>
                <Text>
                    {resources.primordial}
                </Text>
                <Flex w="100%" px="64px" justifyContent={"flex-end"}>
                    <Text fontSize="4xl" ml={8} my={2}>
                        Points Used: {pointsUsed} / 55
                    </Text>
                </Flex>
            </Stack>
            <Stack w="100%" isInline align={"center"} justifyContent={"center"}>
                <Text pl={4} pr={5}> Goal: </Text>
            <Image py={2} pl={4} src={ascendantImg}/>
                <Text>
                    {resources.ascendantG}
                </Text>
                <Image py={2} pl={4} src={chaosImg}/>
                <Text>
                    {resources.chaosG}
                </Text>
                <Image py={2} pl={4} src={eldritchImg}/>
                <Text>
                    {resources.eldritchG}
                </Text>
                <Image py={2} pl={4} src={orderImg}/>
                <Text>
                    {resources.orderG}
                </Text>
                <Image py={2} pl={4} src={primordialImg}/>
                <Text>
                    {resources.primordialG}
                </Text>
                <Flex w="100%" px="64px" justifyContent={"flex-end"}>
                    <Menu>
                        <MenuButton as={Button} rightIcon="chevron-down">
                            Actions
                        </MenuButton>
                        <MenuList>
                            <MenuItem p={2} onClick={listener.showSummary}>Show Summary</MenuItem>
                            <MenuItem p={2} onClick={listener.reset}>Reset</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Stack>
            <InputGroup pb={4}>
                <InputLeftElement
                    height={16}
                    px={4}
                    children={
                        <Icon
                            height={6}
                            width={6}
                            name="search"
                            color="gray.300"/>
                    }
                />

                <Input
                    variant="filled"
                    focusBorderColor="null"
                    style={{background: "white", transition: ".3s"}}
                    textAlign={['left', 'center']}
                    type="text"
                    fontSize={32}
                    placeholder="Search..."
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            listener.onSearch(localStorage.getItem("search"))
                        }
                    }}
                    onChange={(e) => {
                        localStorage.setItem("search", e.target.value.toLowerCase())
                    }}
                    _focus={{
                        borderColor: "white",
                        shadow: "md",
                        position: "relative",
                        top: "-2px",
                        width: "600px"
                    }}
                    height={16}
                    width={350}/>
            </InputGroup>
        </Stack>
    )
}