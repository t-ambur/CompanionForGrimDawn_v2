import {
    Button,
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
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text
} from "@chakra-ui/core";
import React from "react";
import {ascendantImg, chaosImg, eldritchImg, imgBg, orderImg, primordialImg} from "./constants";
import {isAvailable} from "./Utils";

export function cardLayout(constellation) {
    return (
        <Stack>
            <Image h="250px" style={{
                backgroundImage: imgBg,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} src={constellation.imageSrc}/>
            <Text mx={4}>
                {constellation.name} (Points: {constellation.points})
            </Text>
            {
                (constellation.requirements.ascendant || constellation.requirements.chaos || constellation.requirements.eldritch || constellation.requirements.order || constellation.requirements.primoridal) &&
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
                (constellation.rewards.ascendant || constellation.rewards.chaos || constellation.rewards.eldritch || constellation.rewards.order || constellation.rewards.primordial) &&
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
        </Stack>
    )
}

export function cardDetail(selected, isOpen, onClose, resources, onAddItemClicked, onRemoveItemClicked) {
    return (
        selected &&
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader> {selected.name} (Points: {selected.points})</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    {
                        <Stack>
                            <Image h="250px" style={{
                                backgroundImage: imgBg,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }} src={selected.imageSrc}/>
                            {
                                selected.description.split('\n').filter(function (el) {
                                    return el !== "";
                                }).map(line => {
                                    return (
                                        <Text px={4}>
                                            {line}
                                        </Text>
                                    )
                                })
                            }
                        </Stack>
                    }
                </ModalBody>

                <ModalFooter>
                    <Button variantColor="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>

                    {selected.isSelected &&
                    <Button variantColor="red" variant="ghost" onClick={() => {
                        if (onRemoveItemClicked(selected)) {
                            onClose()
                        }
                    }}>Remove</Button>}

                    {isAvailable(selected.requirements, resources) && !selected.isSelected &&
                    <Button variantColor="green" variant="ghost" onClick={() => {
                        if (onAddItemClicked(selected)) {
                            onClose()
                        }
                    }}>Add</Button>}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export function getHeader(resources, pointsUsed, listener) {
    return (
        <Stack background={"white"} shadow="md" align={"center"} style={{
            position: "sticky",
            top: "0"
        }}>
            <Stack isInline w="100%" align={"center"}>
                <Text w="100%" fontSize="4xl" px={8} my={2}>
                    Companion For Grim Dawn
                </Text>
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
                <Text w="100%" fontSize="4xl" ml={8} my={2}>
                    Points Used: {pointsUsed} / 55
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
                    style={{background: "rgba(0,0,0,0.04)", transition: ".3s"}}
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
                        borderColor: "null",
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