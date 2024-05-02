import React from "react";
import { useTranslation } from "react-i18next";
import '../App.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function CardObject({ title, description, image}) {
    const { t } = useTranslation();
    const cardStyles = {
      maxWidth: 345, 
    };

    return (
      <>
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
          <Button size="small">{t("BlogButton")}</Button>
        </CardActions>
      </Card>
      </>
    );
  }

  export default CardObject;