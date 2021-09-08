import { Suspense, lazy } from 'react';
import type { PartialRouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
// import AuthGuard from "./components/AuthGuard";
import BrowseLayout from './components/BrowseLayout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DocsLayout from './components/docs/DocsLayout';
import GuestGuard from './components/GuestGuard';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './components/MainLayout';

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// Browse pages

const Browse = Loadable(lazy(() => import('./pages/browse/Browse')));
const BrowseButtons = Loadable(lazy(() => import('./pages/browse/BrowseButtons')));
const BrowseCharts = Loadable(lazy(() => import('./pages/browse/BrowseCharts')));
const BrowseColors = Loadable(lazy(() => import('./pages/browse/BrowseColors')));
const BrowseDetailLists = Loadable(lazy(() => import('./pages/browse/BrowseDetailLists')));
const BrowseForms = Loadable(lazy(() => import('./pages/browse/BrowseForms')));
const BrowseGridLists = Loadable(lazy(() => import('./pages/browse/BrowseGridLists')));
const BrowseGroupedLists = Loadable(lazy(() => import('./pages/browse/BrowseGroupedLists')));
const BrowseInputs = Loadable(lazy(() => import('./pages/browse/BrowseInputs')));
const BrowseModals = Loadable(lazy(() => import('./pages/browse/BrowseModals')));
const BrowseQuickStats = Loadable(lazy(() => import('./pages/browse/BrowseQuickStats')));
const BrowseTables = Loadable(lazy(() => import('./pages/browse/BrowseTables')));
const BrowseTypography = Loadable(lazy(() => import('./pages/browse/BrowseTypography')));

// Authentication pages

const Login = Loadable(lazy(() => import('./pages/authentication/Login')));
const PasswordRecovery = Loadable(lazy(() => import('./pages/authentication/PasswordRecovery')));
const PasswordReset = Loadable(lazy(() => import('./pages/authentication/PasswordReset')));
const Register = Loadable(lazy(() => import('./pages/authentication/Register')));
const VerifyCode = Loadable(lazy(() => import('./pages/authentication/VerifyCode')));

// Blog pages

// const BlogPostCreate = Loadable(
//   lazy(() => import("./pages/blog/BlogPostCreate"))
// );
// const BlogPostDetails = Loadable(
//   lazy(() => import("./pages/blog/BlogPostDetails"))
// );
// const BlogPostList = Loadable(lazy(() => import("./pages/blog/BlogPostList")));

// Dashboard pages

const Account = Loadable(lazy(() => import('./pages/dashboard/Account')));
const Analytics = Loadable(lazy(() => import('./pages/dashboard/Analytics')));
const CustomerDetails = Loadable(lazy(() => import('./pages/dashboard/CustomerDetails')));
const CustomerEdit = Loadable(lazy(() => import('./pages/dashboard/CustomerEdit')));
const CustomerList = Loadable(lazy(() => import('./pages/dashboard/CustomerList')));
const Finance = Loadable(lazy(() => import('./pages/dashboard/Finance')));
const InvoiceDetails = Loadable(lazy(() => import('./pages/dashboard/InvoiceDetails')));
const InvoiceList = Loadable(lazy(() => import('./pages/dashboard/InvoiceList')));
// const Kanban = Loadable(lazy(() => import("./pages/dashboard/Kanban")));
const OrderDetails = Loadable(lazy(() => import('./pages/dashboard/OrderDetails')));
const OrderList = Loadable(lazy(() => import('./pages/dashboard/OrderList')));
const Overview = Loadable(lazy(() => import('./pages/dashboard/Overview')));
const ProductCreate = Loadable(lazy(() => import('./pages/dashboard/ProductCreate')));
const ProductList = Loadable(lazy(() => import('./pages/dashboard/ProductList')));

// Docs pages

const Docs = Loadable(lazy(() => import('./pages/Docs')));

// Error pages

const AuthorizationRequired = Loadable(lazy(() => import('./pages/AuthorizationRequired')));
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));
const ServerError = Loadable(lazy(() => import('./pages/ServerError')));

// Projects pages

const ProjectBrowse = Loadable(lazy(() => import('./pages/dashboard/ProjectBrowse')));
const ProjectCreate = Loadable(lazy(() => import('./pages/dashboard/ProjectCreate')));
const ProjectDetails = Loadable(lazy(() => import('./pages/dashboard/ProjectDetails')));

// Social pages

const SocialFeed = Loadable(lazy(() => import('./pages/dashboard/SocialFeed')));
const SocialProfile = Loadable(lazy(() => import('./pages/dashboard/SocialProfile')));

// Other pages

const Checkout = Loadable(lazy(() => import('./pages/Checkout')));
// const Contact = Loadable(lazy(() => import("./pages/Contact")));
const Home = Loadable(lazy(() => import('./pages/Home')));
const Pricing = Loadable(lazy(() => import('./pages/Pricing')));

// Dashboard pages ----------------------------------------------------------------------------

const DashboardAsset = Loadable(lazy(() => import('./pages/DashboardSb/Asset')));
const DashboardCustomerSupport = Loadable(
  lazy(() => import('./pages/DashboardSb/CustomerSupport')),
);
const DashboardKpi = Loadable(lazy(() => import('./pages/DashboardSb/Kpi')));

// Deposit pages

const DepositAddress = Loadable(lazy(() => import('./pages/Deposit/DepositAddress')));
const DepositStatus = Loadable(lazy(() => import('./pages/Deposit/DepositStatus')));

// Withdrawal pages

const WaitingWithdrawalApproval = Loadable(
  lazy(() => import('./pages/Withdrawal/WaitingWithdrawalApproval')),
);
const WithdrawalAddress = Loadable(lazy(() => import('./pages/Withdrawal/WithdrawalAddress')));
const WithdrawalStatus = Loadable(lazy(() => import('./pages/Withdrawal/WithdrawalStatus')));

// Investment pages

const CustomInvestment = Loadable(lazy(() => import('./pages/Investment/Custom')));
const EntireInvestment = Loadable(lazy(() => import('./pages/Investment/Entire')));
const WaitingInvestmentApproval = Loadable(
  lazy(() => import('./pages/Investment/WatingInvestmentApproval')),
);

// Master pages

const CoinManagement = Loadable(lazy(() => import('./pages/Master/CoinManagement')));
const Maintenance = Loadable(lazy(() => import('./pages/Master/Maintenance')));
const PlanManagement = Loadable(lazy(() => import('./pages/Master/PlanManagement')));
const UserWalletCollection = Loadable(lazy(() => import('./pages/Master/UserWalletCollection')));

// Support pages

const ErrorLog = Loadable(lazy(() => import('./pages/Support/ErrorLog')));
const News = Loadable(lazy(() => import('./pages/Support/News')));
const Notice = Loadable(lazy(() => import('./pages/Support/Notice')));
const PushList = Loadable(lazy(() => import('./pages/Support/PushList')));
const SendPush = Loadable(lazy(() => import('./pages/Support/SendPush')));

// User pages

const AccessHistory = Loadable(lazy(() => import('./pages/User/AccessHistory')));
const Deregister = Loadable(lazy(() => import('./pages/User/Deregister')));
const DormantAccount = Loadable(lazy(() => import('./pages/User/DormantAccount')));
const UserSearch = Loadable(lazy(() => import('./pages/User/Search')));
const Membership = Loadable(lazy(() => import('./pages/User/Membership')));
const UserWaitingApproval = Loadable(lazy(() => import('./pages/User/WaitingApproval')));

const routes: PartialRouteObject[] = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
      {
        path: 'login-unguarded',
        element: <Login />,
      },
      {
        path: 'password-recovery',
        element: <PasswordRecovery />,
      },
      {
        path: 'password-reset',
        element: <PasswordReset />,
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <Register />
          </GuestGuard>
        ),
      },
      {
        path: 'register-unguarded',
        element: <Register />,
      },
      {
        path: 'verify-code',
        element: <VerifyCode />,
      },
    ],
  },
  {
    path: '*',
    element: (
      // <AuthGuard>
      <DashboardLayout />
      // </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'dashboard',
        children: [
          {
            path: 'asset',
            element: <DashboardAsset />,
          },
          {
            path: 'customer-service',
            element: <DashboardCustomerSupport />,
          },
          {
            path: 'kpi',
            element: <DashboardKpi />,
          },
        ],
      },
      {
        path: 'deposit',
        children: [
          {
            path: 'address',
            element: <DepositAddress />,
          },
          {
            path: 'status',
            element: <DepositStatus />,
          },
        ],
      },
      {
        path: 'withdrawal',
        children: [
          {
            path: 'address',
            element: <WithdrawalAddress />,
          },
          {
            path: 'status',
            element: <WithdrawalStatus />,
          },
          {
            path: 'waiting-approval',
            element: <WaitingWithdrawalApproval />,
          },
        ],
      },
      {
        path: 'investment',
        children: [
          {
            path: 'custom',
            element: <CustomInvestment />,
          },
          {
            path: 'entire',
            element: <EntireInvestment />,
          },
          {
            path: 'waiting-approval',
            element: <WaitingInvestmentApproval />,
          },
        ],
      },
      {
        path: 'master',
        children: [
          {
            path: 'coin-management',
            element: <CoinManagement />,
          },
          {
            path: 'maintenance',
            element: <Maintenance />,
          },
          {
            path: 'plan-management',
            element: <PlanManagement />,
          },
          {
            path: 'user-wallet-collection',
            element: <UserWalletCollection />,
          },
        ],
      },
      {
        path: 'support',
        children: [
          {
            path: 'error-log',
            element: <ErrorLog />,
          },
          {
            path: 'news',
            element: <News />,
          },
          {
            path: 'notice',
            element: <Notice />,
          },
          {
            path: 'push-list',
            element: <PushList />,
          },
          {
            path: 'send-push',
            element: <SendPush />,
          },
        ],
      },
      {
        path: 'user',
        children: [
          {
            path: 'access-history',
            element: <AccessHistory />,
          },
          {
            path: 'deregister',
            element: <Deregister />,
          },
          {
            path: 'dormant',
            element: <DormantAccount />,
          },
          {
            path: 'search',
            element: <UserSearch />,
          },
          {
            path: 'membership',
            element: <Membership />,
          },
          {
            path: 'waiting-approval',
            element: <UserWaitingApproval />,
          },
        ],
      },
    ],
  },
  {
    path: 'exdashboard',
    element: (
      // <AuthGuard>
      <DashboardLayout />
      // </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <Overview />,
      },
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'customers',
        children: [
          {
            path: '/',
            element: <CustomerList />,
          },
          {
            path: ':customerId',
            element: <CustomerDetails />,
          },
          {
            path: ':customerId/edit',
            element: <CustomerEdit />,
          },
        ],
      },
      {
        path: 'invoices',
        children: [
          {
            path: '/',
            element: <InvoiceList />,
          },
          {
            path: ':invoiceId',
            element: <InvoiceDetails />,
          },
        ],
      },
      // {
      //   path: "kanban",
      //   element: <Kanban />,
      // },
      {
        path: 'orders',
        children: [
          {
            path: '/',
            element: <OrderList />,
          },
          {
            path: ':orderId',
            element: <OrderDetails />,
          },
        ],
      },
      {
        path: 'finance',
        element: <Finance />,
      },
      {
        path: 'products',
        children: [
          {
            path: '/',
            element: <ProductList />,
          },
          {
            path: 'new',
            element: <ProductCreate />,
          },
        ],
      },
      {
        path: 'projects',
        children: [
          {
            path: 'browse',
            element: <ProjectBrowse />,
          },
          {
            path: 'new',
            element: <ProjectCreate />,
          },
          {
            path: ':projectId',
            element: <ProjectDetails />,
          },
        ],
      },
      {
        path: 'social',
        children: [
          {
            path: 'feed',
            element: <SocialFeed />,
          },
          {
            path: 'profile',
            element: <SocialProfile />,
          },
        ],
      },
      {
        path: 'browse',
        element: <BrowseLayout />,
        children: [
          {
            path: '/',
            element: <Browse />,
          },
          {
            path: '/buttons',
            element: <BrowseButtons />,
          },
          {
            path: '/inputs',
            element: <BrowseInputs />,
          },
          {
            path: '/charts',
            element: <BrowseCharts />,
          },
          {
            path: '/colors',
            element: <BrowseColors />,
          },
          {
            path: '/data-display/detail-lists',
            element: <BrowseDetailLists />,
          },
          {
            path: '/data-display/quick-stats',
            element: <BrowseQuickStats />,
          },
          {
            path: '/data-display/tables',
            element: <BrowseTables />,
          },
          {
            path: '/forms',
            element: <BrowseForms />,
          },
          {
            path: '/modals',
            element: <BrowseModals />,
          },
          {
            path: '/lists/grouped-lists',
            element: <BrowseGroupedLists />,
          },
          {
            path: '/lists/grid-lists',
            element: <BrowseGridLists />,
          },
          {
            path: '/typography',
            element: <BrowseTypography />,
          },
        ],
      },
    ],
  },
  {
    path: 'docs',
    element: <DocsLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/docs/overview/welcome" replace />,
      },
      {
        path: '*',
        element: <Docs />,
      },
    ],
  },
];

export default routes;
