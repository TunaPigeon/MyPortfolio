import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomePagePreview from '../media/MiniProject1/Home page.png';
import CharacterPagePreview from '../media/MiniProject1/Character Page.png';
import CharacterPageVideo from '../media/MiniProject1/Characters Page.mp4';
import QuizPage from '../media/MiniProject1/Quiz Page.png';
import QuizPageVideo from '../media/MiniProject1/Quiz Page.mp4';
import ContactUsPage from '../media/MiniProject1/Contact Us.png';
import ChartPage from '../media/MiniProject1/Chart Page.png';
import DifferentPagesVideo from '../media/MiniProject1/Contact and Chart different pages.mp4';
import ThemeSelector from '../media/MiniProject1/Theme Nav.png';
import ThemeSelectorVideo from '../media/MiniProject1/Recording of Themes.mp4';
import MiniProject3Preview from '../media/MiniProject3/MiniProject3Preview.png';
import CharactersFromAPItoDatabase from '../media/MiniProject3/CharactersFromAPItoDatabase.mp4';
import CharactersInDatabase from '../media/MiniProject3/CharactersInDatabase.mp4';
import getCustomersAndOrders from '../media/MiniProject3/getCustomersAndOrders.mp4';
import CharacterTestFromDatabase from '../media/MiniProject3/CharacterTestFromDatabase.mp4';
import CharacterNotInDatabase from '../media/MiniProject3/CharacterNotInDatabase.mp4';
import CompletedStatus from '../media/MiniProject3/CompletedStatus.mp4';
import DeleteOrder from '../media/MiniProject3/DeleteOrder.mp4';
import Gameplay from '../media/MiniProject2/Gameplay.mp4';
import RestOfTheWebsite from '../media/MiniProject2/RestOfTheWebsite.mp4';
import CapstonePreview from '../media/CapstoneProject/CapstonePreview.png';

import CapstoneHome from '../media/CapstoneProject/Home page.mp4';
import CapstoneCharacter from '../media/CapstoneProject/Character page.mp4';
import CapstoneQuiz from '../media/CapstoneProject/Quiz page.mp4';
import CapstoneJasmineDragon1 from '../media/CapstoneProject/Jasmine Dragon pt 1.mp4';
import CapstoneJasmineDragon2 from '../media/CapstoneProject/Jasmine Dragon pt 2.mp4';
import CapstoneJasmineDragon3 from '../media/CapstoneProject/Jasmine Dragon pt 3.mp4';
import CapstoneJasmineDragon4 from '../media/CapstoneProject/Jasmine Dragon pt 4.mp4';





// Sample projects with their images and captions
const courseProjects = [
  {
    title: 'Mini Project 1: Avatar Database',
    previewImage: HomePagePreview,
    images: [
      { src: HomePagePreview, caption: 'I was tasked to create an Interactive Data-Driven Web Application, by combining HTML, CSS, JavaScript, charts for data representation, and leverage Fetch/Axios for data retrieval. The data i used belong to an Avatar API and i used that to create an Avatar Database. ' },
      { src: CharacterPageVideo, caption: 'This is the character page, showing off each character dataset provided by the api. With each character block, when clicked, it will expand and show information about the character.', type:'video'},
      { src: QuizPageVideo, caption: 'This is the quiz page, showing off every question provided by the api, and when clicked, reveals the answer behind.', type:'video'},
      { src: ChartPage, caption: 'This is the chart page, showing off the number of episodes done by each director. This and the Contact Us page were done on seperate pages to show page navigation, which is why it looks different to the home, character and quiz page' },
      { src: ContactUsPage, caption: 'This is the contact us page. This and the chart page were done on seperate pages to show page navigation, which is why it looks different to the home, character and quiz page' },
      { src: DifferentPagesVideo, caption: 'This video shows how the home page, character page and quiz page are all on one page and dynamically changes when clicking their buttons. Whereas for the chart page and contact us page, it goes to their own pages to show page navigation (as shown by the url changes).', type:'video' },
      { src: ThemeSelector, caption: 'I have a theme selector in the top left hand corner off the page. When clicked, it reveals 5 different themes (page is currently on Default). Each theme changes the pages for the home page, character page and the quiz page (not including chart page and contact us page as they are on seperate pages). Video example shown next slide.' },
      { src: ThemeSelectorVideo, caption: 'Video example the theme changes the home page, character page, and then quiz page. Does not affect the chart and contact us page.' , type:'video'},
      
    ],
  },
  {
    title: 'Mini Project 2: React Updated Avatar Database ',
    previewImage: CharacterPagePreview,
    images: [
      { src: CharacterPagePreview, caption: 'I was tasked to create a dynamic and interactive frontend Application that uses the core principles of React. I updated my first project by creating it again in React, but with an additional interactive teashop game.' },
      { src: RestOfTheWebsite, caption: 'This was suppose to be an updated version of my mini project 1 web page, but as we did mini project 3 before this project, I came up with an idea of a teashop simulator (using the api used in mini project 3). It then went from a simulator to a game, which took up majority of the time, which is which these pages arent fully complete. Instead i was able to get an interactive teashop game working, shown in the next slide.', type:'video' },
      { src: Gameplay, caption: 'This is the interactive teashop game, and the video shows gameplay of how it works. As the worker, we have to enter in the order and then click the ingredients required to make the order before the time runs out.' , type:'video'},

    ],
  },
  {
    title: 'Mini Project 3: Teashop backend',
    previewImage: MiniProject3Preview,
    images: [
      { src: MiniProject3Preview, caption: 'I was tasked to develop a robust backend application that leverages one or more chosen 3rd party APIs, while incorporating a database to enhance functionality. I used another Avatar database with more characters and information, and used Bruno to test out the CRUD operations, implemented using controllers and models.' },
      { src: CharactersFromAPItoDatabase, caption: 'This shows that I am grabbing the data from the api and moving it into a database' , type:'video' },
      { src: CharactersInDatabase, caption: 'This shows that with every character, I am giving them extra fields (id, numberOfOrders) that will come into play later', type:'video'  },
      { src: getCustomersAndOrders, caption: 'This shows that the getCustomers and getOrders grabs whatever is in their respective collection, which in this case is nothing at the moment' , type:'video' },
      { src: CharacterTestFromDatabase, caption: 'I made it so that we can only create orders for characters in the database. In this example, I used Chong and after creating an order for him, it adds him into the customers collection and his order into the orders collection. It also adds +1 to his numberOfOrders too.', type:'video'  },
      { src: CharacterNotInDatabase, caption: 'This shows what happens if I try to create an order for someone not in the database', type:'video'  },
      { src: CompletedStatus, caption: 'This shows how I am able to update each order by using their order id and by updating, I am changing the order status from uncompleted to completed', type:'video'  },
      { src: DeleteOrder, caption: 'This shows that I am able to delete orders by using their order id, which then removes their order from the collection', type:'video'  },
    ],
  },
  {
    title: 'Capstone Project: Avatar Universe Hub',
    previewImage: CapstonePreview,
    images: [
      { src: CapstonePreview, caption: 'This project I had to combine both mini project 2 and 3. I was able to complete all pages, and worked on implementing more features into the interactive teashop game.' },
      { src: CapstoneHome, caption: 'This is the home page' , type:'video'},
      { src: CapstoneCharacter, caption: 'This is the character page. When a character is clicked, a popup will show for that character with extra information about them' , type:'video'},
      { src: CapstoneQuiz, caption: 'This is the quiz page. When a question card is clicked, the answer will be revealed' , type:'video'},
      { src: CapstoneJasmineDragon1, caption: 'This is the interactive teashop game menu. I have added a how to play section and a highscore feature', type:'video' },
      { src: CapstoneJasmineDragon2, caption: 'This is gameplay of how the game works. This first part shows how we have to clock in and then once we fail, it shows how many orders were done (in this case none)' , type:'video'},
      { src: CapstoneJasmineDragon3, caption: 'This next part shows what happens after a game is lost (previous player saved in highscore), and what happens when one order is completed but fails the next.', type:'video' },
      { src: CapstoneJasmineDragon4, caption: 'This final part shows what happens if we click start again instead of returning to menu, and that it will save each run as its own score (as it shows 2 Max) ', type:'video' },


    ],
  },
];

const personalProjects = [
  {
    title: 'Invincible Database Website (WIP)',
    images: [
      { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'To be added' },
      { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'To be added' },
    ],
  },
  // {
  //   title: 'Personal Project 2',
  //   images: [
  //     { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'Image 1 of Personal Project 2' },
  //     { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'Image 2 of Personal Project 2' },
  //   ],
  // },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  
  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <>
   
      {/* Course Projects Title */}
      <h3>🎓Course Projects</h3>

      <Grid container spacing={2}>
        {courseProjects.map((project, index) => (
          <Grid item xs={12} md={4} key={index} >
            <div
             style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
              onClick={() => handleClickOpen(project)}
            >
               <img src={project.previewImage} alt={project.title} width="300px" />
              <h3>{project.title}</h3>
              
              <p>Click to view more</p>
            </div>
          </Grid>
        ))}
      </Grid>

      {/* Personal Projects Title */}
      <h3>🚀Personal Projects</h3>

      <Grid container spacing={2}>
        {personalProjects.map((project, index) => (
          <Grid item xs={12} md={4} key={index} >
            <div
              style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
              onClick={() => handleClickOpen(project)}
            >
              <img src={project.images[0].src} alt={project.title} width="300px" />
              <h3>{project.title}</h3>
              <p>Click to view more</p>
            </div>
          </Grid>
        ))}
      </Grid>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
  {selectedProject && (
    <div style={{ textAlign: 'center' }}>
      {selectedProject.images[currentImageIndex].type === 'video' ? (
        <video
        key={selectedProject.images[currentImageIndex].src} // 👈 this forces re-render
        controls
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        <source src={selectedProject.images[currentImageIndex].src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      ) : (
        <img
          src={selectedProject.images[currentImageIndex].src}
          alt={selectedProject.title}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
      <h2>{selectedProject.title}</h2>
      <p>{selectedProject.description}</p>
      <p>{selectedProject.images[currentImageIndex].caption}</p>
    </div>
  )}
  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
    <IconButton onClick={handlePrev}>
      <ArrowBackIcon />
    </IconButton>
    <IconButton onClick={handleNext}>
      <ArrowForwardIcon />
    </IconButton>
  </div>
</DialogContent>

      </Dialog>
    </>
  );
};

export default Projects;
