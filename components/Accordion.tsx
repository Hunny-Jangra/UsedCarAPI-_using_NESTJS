import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Divider,
} from "@chakra-ui/react";
const Accordions: React.FC<{}> = () => {
  return (
    <>
      <br />
      <br />
      <Heading textAlign={"center"}>Popular Searches</Heading>
      <br /><br />
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Popular new cars for Sale
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Typically, yes. Dealerships like to sell off their stock at the end of the year, and you can find a good deal on the outgoing year’s model vehicle. However, you can still find good deals throughout the year, including at the end of a month, the end of a quarter, and during holiday sales periods like Labor Day.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Popular used cars for sale
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          For some brands and some dealerships, prices began dropping. Car prices continue to decline but are still 27% higher than three years ago when the United States was coming out of lockdown during COVID-19. Jaguar, Lincoln, Infiniti, Buick, and Ram vehicles showed the most supply, meaning there may be room for negotiation.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Research new cars for sale
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Luxury vehicles make up nearly 19% of total vehicle sales. Since January, luxury prices dropped by more than 4%. Non-Luxury vehicle prices: In June, car buyers paid an average transaction price of $45,291 for non-luxury vehicles. Electric car prices: The average transaction for a new electric car is $53,438, or down more than 20% from a year ago.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Research popular used cars
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Luxury vehicles make up nearly 19% of total vehicle sales. Since January, luxury prices dropped by more than 4%. Non-Luxury vehicle prices: In June, car buyers paid an average transaction price of $45,291 for non-luxury vehicles. Electric car prices: The average transaction for a new electric car is $53,438, or down more than 20% from a year ago.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br /><br />
      <Divider/>
    </>
  );
};

export default Accordions;
