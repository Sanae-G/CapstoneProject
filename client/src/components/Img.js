import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
// import {Transformation} from "@cloudinary/url-gen";

// Import required actions.
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
// import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
// import {sepia} from "@cloudinary/url-gen/actions/effect";
// import {source} from "@cloudinary/url-gen/actions/overlay";
// import {opacity,brightness} from "@cloudinary/url-gen/actions/adjust";
// import {byAngle} from "@cloudinary/url-gen/actions/rotate"

// Import required qualifiers.
// import {image} from "@cloudinary/url-gen/qualifiers/source";
// import {Position} from "@cloudinary/url-gen/qualifiers/position";
// import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
// import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
// import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';

const Img = ({ imageID }) => {
  const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUDNAME,
    },
  });

  // Use the image with public ID, 'front_face'.
  const userImage = cld.image(imageID);

  userImage.resize(thumbnail().width(150).height(150));

  return (
    <div>
      <AdvancedImage cldImg={userImage} />
    </div>
  );
};

export default Img;
