'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { reviews } from "./data";

var e = React.createElement;

var showReviews = function showReviews(reviewArr) {
  console.log(reviewArr);
  var obj = reviewArr.map(function (review, i) {
    return React.createElement(
      "div",
      { key: i, className: "card testimonial" },
      React.createElement(
        "div",
        { className: "card-body" },
        React.createElement(
          "h5",
          { className: "card-title name" },
          review.name
        ),
        React.createElement(
          "p",
          { className: "name" },
          review.review
        ),
        React.createElement(
          "p",
          { className: "name" },
          review.date
        )
      )
    );
  });
  return obj;
};

var ReviewList = function (_React$Component) {
  _inherits(ReviewList, _React$Component);

  function ReviewList(props) {
    _classCallCheck(this, ReviewList);

    return _possibleConstructorReturn(this, (ReviewList.__proto__ || Object.getPrototypeOf(ReviewList)).call(this, props));
  }

  _createClass(ReviewList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        showReviews(reviews)
      );
    }
  }]);

  return ReviewList;
}(React.Component);

var domContainer = document.querySelector('#review_list_container');ReactDOM.render(e(ReviewList), domContainer);