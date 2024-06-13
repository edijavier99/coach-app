import React , {useState}from 'react';
import "../styles/articles.css"
import CreateArticle from './createArticle';

const AccordionItem = ({ index, title, activeIndex, setActiveIndex }) => {
  const handleClick = () => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <button
      className={`accordion-title-button ${index === activeIndex ? 'active' : ''}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

const Articles = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: 'Create Article',
      content: (
        <CreateArticle/>
      ),
    },
    {
      title: 'Update Article',
      content: (
        <strong>This is the second item's accordion body.</strong>
      ),
    },
    {
      title: 'Delete Article',
      content: (
        <strong>This is the third item's accordion body.</strong>
      ),
    },
    {
      title: 'All Articles',
      content: (
        <strong>This is the third item's accordion body.</strong>
      ),
    },
  ];

  return (
    <section id='admin-article'  className='container-fluid'>
      <header className='aa-header row col-11 mx-auto my-3 p-4'>
          <h1>Articles Section</h1>
          <p>this section you can add, delete, edit and create articles that is going to be posted on the blog</p>
      </header>

      <main className='aa-main row col-11  mx-auto'>
        <div className="accordion-container p-4">
          <div className="accordion-titles">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                index={index}
                title={item.title}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
          <div className="accordion-contents">
            {items.map((item, index) => (
              <div
                key={index}
                className={`accordion-content ${index === activeIndex ? 'show' : ''}`}
              >
                <div className="accordion-body">{item.content}</div>
              </div>
            ))}
          </div>
      </div>
      </main>
    </section >
  );
};

export default Articles;