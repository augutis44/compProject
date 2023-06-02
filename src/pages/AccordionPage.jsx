import Accordion from "../components/Accordion"

const AccordionPage = () => {

  const items = [
    {
      id: 'sdf56d',
      label: 'Can I use React on a project?',
      content: 'Yes you can use React. Yes you can use React. Yes you can use React. Yes you can use React. Yes you can use React.'
    },
    {
      id: 's5df48',
      label: 'Can I use JavaScript on a project?',
      content: 'Yes you can use JavaScript. Yes you can use JavaScript. Yes you can use JavaScript. Yes you can use JavaScript.'
    },
    {
      id: '98fdf7',
      label: 'Can I use CSS on a project?',
      content: 'Yes you can use CSS. Yes you can use CSS. Yes you can use CSS. Yes you can use CSS. Yes you can use CSS.'
    }
  ];

  return <Accordion items={items}/>

}

export default AccordionPage;
