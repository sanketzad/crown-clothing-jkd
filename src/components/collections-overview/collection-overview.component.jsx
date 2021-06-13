import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collection-overview.styles.css";
import CollectionPreview from "../collection-preview/collections-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCOllectionProps }) => (
      <CollectionPreview key={id} {...otherCOllectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
