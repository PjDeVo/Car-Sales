import React from "react";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = (props) => {
  return (
    <div className="content">
      {console.log(props)}
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature
              purchase={props.purchase}
              key={item.id}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
