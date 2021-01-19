'use strict';
import {reviews} from "./data";

const e = React.createElement;

const reviewSlide = (reviewArr) => {
  console.log(reviewArr);
  let obj = reviewArr.map((review, i) => {
return (
<div key={i} className={"carousel-item" + (i === 1 ? " active " : "")}>
<div className="card testimonial">
<div className="card-body">
  <h5 className="card-title name">{review.name}</h5>
  <p className="name">
   {review.review}
  </p>
  <p className="name">{review.date}</p>
</div>
</div>
</div>
)
  }); 
  return obj
}

class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
        return (          <div className="carousel-inner">

{reviewSlide(reviews)}

</div>        );
  }
}


const domContainer = document.querySelector('#review_container');ReactDOM.render(e(ReviewContainer), domContainer);

