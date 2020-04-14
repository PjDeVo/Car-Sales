import React from "react";

import { connect } from "react-redux";

const Total = (props) => {
  return (
    <div className="content">
      {<h4>Total Amount: ${props.carPrice + props.additionalCost}</h4>}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log("state in mapStateToProps", state);
//   return {
//     car: state.car,
//     carPrice: state.car.price,
//     carImage: state.car.image,
//     carName: state.car.name,
//     features: state.car.features,
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice,
//   };
// };

// export default connect(mapStateToProps, { addFeature, removeFeature })(App);

const mapStateToProps = (state) => {
  return {
    additionalCost: state.additionalPrice,
    carPrice: state.car.price,
  };
};

export default connect(mapStateToProps, {})(Total);
