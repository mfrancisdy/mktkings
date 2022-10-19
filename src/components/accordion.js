import Accordion from 'react-bootstrap/Accordion';

function AccordionMod() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item bsPrefix='accordionItem' eventKey="0">
        <Accordion.Header bsPrefix='accordionHeader'>
            <h3 className='accordionTitle'>What is the total The Name supply?</h3>
        </Accordion.Header>
        <Accordion.Body bsPrefix='accordionBody'>
            <p className='accordionDesc'>We can create a DEX on any smart chain with so much flexibility- if you want a PCS fork, we can do that but if you want something truly customized (UI and Backend) we provide this as well. Please reach out and tell us what you are interested in.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item bsPrefix='accordionItem' eventKey="1">
        <Accordion.Header bsPrefix='accordionHeader'>
            <h3 className='accordionTitle'>What is the total The Name supply?</h3>
        </Accordion.Header>
        <Accordion.Body bsPrefix='accordionBody'>
        <p className='accordionDesc'>The Total supply is *****.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionMod;