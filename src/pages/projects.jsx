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





// Sample projects with their images and captions
const courseProjects = [
  {
    title: 'Mini Project 1: Avatar Database',
    previewImage: HomePagePreview,
    description: 'Avatar Database',
    images: [
      { src: HomePagePreview, caption: 'I was tasked to create an Interactive Data-Driven Web Application, by combining HTML, CSS, JavaScript, charts for data representation, and leverage Fetch/Axios for data retrieval. The data i used belong to an Avatar API and i used that to create an Avatar Database.' },
      { src: CharacterPagePreview, caption: 'This is the character page, showing off each character dataset provided by the api. With each character block, when clicked, it will expand and show information about the character. Video example shown next slide.' },
      { src: CharacterPageVideo, caption: 'Video example of how the character page works', type:'video'},
      { src: QuizPage, caption: 'This is the quiz page, showing off every question provided by the api, and when clicked, reveals the answer behind. Video example shown next slide' },
      { src: QuizPageVideo, caption: 'Video example of how the quiz page works', type:'video'},
      { src: ChartPage, caption: 'This is the chart page, showing off the number of episodes done by each director. This and the Contact Us page were done on seperate pages to show page navigation' },
      { src: ContactUsPage, caption: 'This is the contact us page. This and the chart page were done on seperate pages to show page navigation' },
      { src: DifferentPagesVideo, caption: 'This video shows how the home page, character page and quiz page are all on one page and dynamically changes when clicking their buttons. Whereas for the chart page and contact us page, it goes to their own pages to show page navigation (as shown by the url changes).', type:'video' },
      { src: ThemeSelector, caption: 'I have a theme selector in the top left hand corner off the page. When clicked, it reveals 5 different themes (page is currently on Default). Each theme changes the pages for the home page, character page and the quiz page (not including chart page and contact us page as they are on seperate pages). Video example shown next slide.' },
      { src: ThemeSelectorVideo, caption: 'Video example the theme changes the home page, character page, and then quiz page.' , type:'video'},
      
    ],
  },
  {
    title: 'Mini Project 2',
    previewImage: CharacterPagePreview,
    description: 'This is a short description of Mini Project 2.',
    images: [
      { src: Gameplay, caption: 'I was tasked to create a dynamic and interactive frontend Application that uses the core principles of React. I updated my first project by creating it again in React, but with an additional interactive teashop game.' , type:'video'},
      { src: RestOfTheWebsite, caption: 'Image 2 of Mini Project 2', type:'video' },
      { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'Image 2 of Mini Project 2' },

    ],
  },
  {
    title: 'Mini Project 3',
    previewImage: MiniProject3Preview,
    description: 'Teashop Backend.',
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
    title: 'Capstone Project',
    description: 'This is a short description of the Capstone Project.',
    images: [
      { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'Image 1 of Capstone Project' },
      { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'Image 2 of Capstone Project' },
    ],
  },
];

const personalProjects = [
  {
    title: 'Personal Project 1',
    description: 'This is a short description of Personal Project 1.',
    images: [
      { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'Image 1 of Personal Project 1' },
      { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'Image 2 of Personal Project 1' },
    ],
  },
  {
    title: 'Personal Project 2',
    description: 'This is a short description of Personal Project 2.',
    images: [
      { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'Image 1 of Personal Project 2' },
      { src: 'https://miro.medium.com/v2/resize:fit:1400/1*KuGlXZjyTw7q38uzY_aZRA.png', caption: 'Image 2 of Personal Project 2' },
    ],
  },
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
      <h2>Course Projects</h2>

      <Grid container spacing={2}>
        {courseProjects.map((project, index) => (
          <Grid item xs={12} md={4} key={index} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div
              style={{ height: '500px', backgroundColor: 'transparent', cursor: 'pointer' }}
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
      <h2>Personal Projects</h2>

      <Grid container spacing={2}>
        {personalProjects.map((project, index) => (
          <Grid item xs={12} md={4} key={index} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div
              style={{ height: '500px', backgroundColor: 'transparent', cursor: 'pointer' }}
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
