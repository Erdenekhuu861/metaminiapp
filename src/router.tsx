import { RouteObject } from "react-router";

import {
  Onboard,
  SignIn,
  SignUp,
  Splash,
  SignUpVerify,
  SetPassword,
  SetGender,
  SetInterest,
  Home,
  Featured,
  Shop,
  ShopDetail,
  Services,
  ServiceDetail,
  Event,
  EventDetail,
  Profile,
  PersonalInformation,
  Settings,
  ChangePassword,
  ChangePasswordVerify,
  NewPassword,
  Download,
} from "./pages";

//pages

const router: RouteObject[] = [

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
    // children: [{
    //   path: "/shop/:shopId",
    //   element: <ShopDetail />,
    // }]
  },
  {
    path: "/shop/:shopId",
    element: <ShopDetail />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/:serviceId",
    element: <ServiceDetail />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/event/:eventId",
    element: <EventDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/information",
    element: <PersonalInformation />,
  },
  {
    path: "/profile/settings",
    element: <Settings />,
  },
  {
    path: "/profile/settings/changepassword",
    element: <ChangePassword />,
  },
  {
    path: "/profile/settings/changepasswordverify",
    element: <ChangePasswordVerify />,
  },
  {
    path: "/profile/settings/newpassword",
    element: <NewPassword />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/featured",
    element: <Featured />,
  },
  {
    path: "/signup/verify",
    element: <SignUpVerify />,
  },
  {
    path: "/signup/password",
    element: <SetPassword />,
  },
  {
    path: "/signup/gender",
    element: <SetGender />,
  },
  {
    path: "/signup/interest",
    element: <SetInterest />,
  },
];

const registerRouter: RouteObject[] = [
  // {
  //   path: "/:id",
  //   element: <SignUp />,
  // },
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/onboard",
    element: <Onboard />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
];

// export { router, registerRouter };
export { router, registerRouter };
