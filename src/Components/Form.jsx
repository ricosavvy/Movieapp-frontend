import React from 'react'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import * as yup from "yup"
import { json, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMovies } from "../state";
import { TextField } from '@mui/material';

const reviewSchema = yup.object().shape({
    review: yup.string().required("required")
})

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


const Forms = () => {
  const formik = useFormik({
    initialValues: {
      review: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values.review) + " " + value)
    },
  });
  
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    return(
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
              <Box
              sx={{
                width: 1500,
                display: 'flex',
                alignItems: 'center',
                }}
              >
                <input
                  id="review"
                  name="review"
                  type="review"
                  onChange={formik.handleChange}
                  value={formik.values.review}
                />
                <Rating
                  id='stars'
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
              <button id='smtbtn' type="submit">
                <SendIcon />
              </button>
              </Box>
          </form>
    </div>
    )
}

export default Forms
