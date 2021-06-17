import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions.js";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();

    //We also can use promise based asynchronous call to firebase, as below
    // https://firestore.googleapis.com/v1/projects/crown-clothing-c24e2/databases/(default)/documents
    // fetch("https://crown-clothing-c24e2.firebaseio.com/collections.json")
    //   .then(reponse => Response.json())
    //   .then(data => console.log(data))
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
