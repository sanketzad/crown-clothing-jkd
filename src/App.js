import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyles } from "./global.styles";
// import HomePage from "./pages/homepage/homepage.component";
// import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "../src/components/header/header.component.jsx";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// import { setCurrentUser } from "./redux/user/user.actions";
import { SelectCurrentUser } from "./redux/user/user.selectors";
// import CheckoutPage from "./pages/checkout/checkout.component.jsx";
// import ContactUsPage from "./pages/contact-us/contact-us.component";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import Spinner from "./components/spinner/spinner.component.jsx";
import ErrorBoundary from "./components/error-boundary/error-boundary.component.jsx";

const HomePage = lazy(() => import("./pages/homepage/homepage.component.jsx"));
const ShopPage = lazy(() => import("./pages/shop/shop.component.jsx"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx")
);
const CheckoutPage = lazy(() =>
  import("./pages/checkout/checkout.component.jsx")
);
const ContactUsPage = lazy(() =>
  import("./pages/contact-us/contact-us.component")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // const { setCurrentUser } = this.props; //If we have to ad shop data we need to destructure collectionsArray here
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   // createUserProfileDocument(user);
  //   //this.setState({ currentUser: user });
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     userRef.onSnapshot((snapShot) => {
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data(),
  //       });
  //     });
  //   } else {
  //     setCurrentUser(userAuth);
  //   }
  //Used to add shop data to firebase programatically instead of manually doing it
  // addCollectionAndDocumentItems(
  //   "collections",
  //   collectionsArray.map(({ title, items }) => ({ title, items }))
  // );
  // });

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route excat path="/contactus" component={ContactUsPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
  // collectionsArray: selectCollectionsForPreview, //Used to add shop data to firebase programatically instead of manually doing it
});

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
