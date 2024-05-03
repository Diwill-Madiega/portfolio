import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../App.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../App.css";



function CardObject({ title, description, image, theme }) {
    const { t } = useTranslation(); // Destructure 't' from the useTranslation hook
    const [darkMode, setDarkMode] = useState(false);



    // Define styles based on the theme
    const cardStyles = {
      maxWidth: 345,
      
    };

    return (
      <Card sx={cardStyles}>
        <CardMedia 
          sx={{ height: 140 }}
          image={image}
          title={title}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

  export default CardObject;