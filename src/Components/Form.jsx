import React from 'react'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Formik } from 'formik';
import * as yup from "yup"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMovies } from "../state";
import { TextField } from '@mui/material';

const reviewSchema = yup.object().shape({
    review: yup.string().required("required")
})

const initialValuesReview = {
    review: "",
}

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Form = () => {
    

}

export default Form
