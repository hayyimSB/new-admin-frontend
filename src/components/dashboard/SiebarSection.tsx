import BriefcaseIcon from '../../icons/Briefcase';
import ChartPieIcon from '../../icons/ChartPie';
import ChartSquareBarIcon from '../../icons/ChartSquareBar';
import CashIcon from '../../icons/Cash';
import ChatAltIcon from '../../icons/ChatAlt';
// import ClipboardListIcon from "../../icons/ClipboardList";
import FolderOpenIcon from '../../icons/FolderOpen';
// import MailIcon from "../../icons/Mail";
import ShareIcon from '../../icons/Share';
import ShoppingBagIcon from '../../icons/ShoppingBag';
import ShoppingCartIcon from '../../icons/ShoppingCart';
import UserIcon from '../../icons/User';
import UsersIcon from '../../icons/Users';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CollectionIcon from '../../icons/Collection';
import StarIcon from '../../icons/Star';

const SidebarSection = [
  {
    title: '전체 목록',
    items: [
      {
        title: '대시보드',
        path: '/dashboard',
        icon: <ChartSquareBarIcon fontSize="small" />,
        children: [
          {
            title: 'KPI 대시보드',
            path: '/dashboard/kpi',
          },
          {
            title: 'CS 대시보드',
            path: '/dashboard/customer-service',
          },
          {
            title: 'Asset 대시보드',
            path: '/dashboard/asset',
          },
        ],
      },
      {
        title: '입금',
        path: '/deposit',
        icon: <CashIcon fontSize="small" />,
        children: [
          {
            title: '입금주소 관리',
            path: '/deposit/address',
          },
          {
            title: '입금현황',
            path: '/deposit/status',
          },
        ],
      },
      {
        title: '출금',
        path: '/withdrawal',
        icon: <CollectionIcon fontSize="small" />,
        children: [
          {
            title: '출금주소 관리',
            path: '/withdrawal/address',
          },
          {
            title: '출금현황',
            path: '/withdrawal/status',
          },
          {
            title: '출금 승인대기',
            path: '/withdrawal/waiting-approval',
          },
        ],
      },
      {
        title: '투자',
        path: '/investment',
        icon: <StarIcon fontSize="small" />,
        children: [
          {
            title: '전체',
            path: '/investment/entire',
          },
          {
            title: '투자 승인대기',
            path: '/investment/waiting-approval',
          },
          {
            title: '커스텀',
            path: '/investment/custom',
          },
        ],
      },
      {
        title: '마스터',
        path: '/master',
        icon: <UserIcon fontSize="small" />,
        children: [
          {
            title: '코인 관리',
            path: '/master/coin-management',
          },
          {
            title: '플랜 관리',
            path: '/master/plan-management',
          },
          {
            title: '메인터넌스',
            path: '/master/maintenance',
          },
          {
            title: '사용자 지갑 집금',
            path: '/master/user-wallet-collection',
          },
        ],
      },
      {
        title: '서포트',
        path: '/support',
        icon: <ChatAltIcon fontSize="small" />,
        children: [
          {
            title: '공지사항',
            path: '/support/notice',
          },
          {
            title: '뉴스',
            path: '/support/news',
          },
          {
            title: '푸시 목록',
            path: '/support/push-list',
          },
          {
            title: '푸시 발송',
            path: '/support/send-push',
          },
          {
            title: '에러 로그',
            path: '/support/error-log',
          },
        ],
      },
      {
        title: '유저',
        path: '/user',
        icon: <UsersIcon fontSize="small" />,
        children: [
          {
            title: '유저 검색',
            path: '/user/search',
          },
          {
            title: '승인 대기',
            path: '/user/waiting-approval',
          },
          {
            title: '탈퇴',
            path: '/user/deregister',
          },
          {
            title: '휴면',
            path: '/user/dormant',
          },
          {
            title: '회원 등급 관리',
            path: '/user/membership',
          },
          {
            title: '접속 이력',
            path: '/user/access-history',
          },
        ],
      },
    ],
  },
  {
    title: '템플릿 예시1',
    items: [
      {
        title: 'Overview',
        path: '/exdashboard',
        icon: <ChartSquareBarIcon fontSize="small" />,
      },
      {
        title: 'Analytics',
        path: '/exdashboard/analytics',
        icon: <ChartPieIcon fontSize="small" />,
      },
      {
        title: 'Finance',
        path: '/exdashboard/finance',
        icon: <ShoppingBagIcon fontSize="small" />,
      },
      {
        title: 'Account',
        path: '/exdashboard/account',
        icon: <UserIcon fontSize="small" />,
      },
    ],
  },
  {
    title: '템플릿 예시2',
    items: [
      {
        title: 'Customers',
        path: '/exdashboard/customers',
        icon: <UsersIcon fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '/exdashboard/customers',
          },
          {
            title: 'Details',
            path: '/exdashboard/customers/1',
          },
          {
            title: 'Edit',
            path: '/exdashboard/customers/1/edit',
          },
        ],
      },
      {
        title: 'Products',
        path: '/exdashboard/products',
        icon: <ShoppingCartIcon fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '/exdashboard/products',
          },
          {
            title: 'Create',
            path: '/exdashboard/products/new',
          },
        ],
      },
      {
        title: 'Orders',
        icon: <FolderOpenIcon fontSize="small" />,
        path: '/exdashboard/orders',
        children: [
          {
            title: 'List',
            path: '/exdashboard/orders',
          },
          {
            title: 'Details',
            path: '/exdashboard/orders/1',
          },
        ],
      },
      {
        title: 'Invoices',
        path: '/exdashboard/invoices',
        icon: <ReceiptIcon fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '/exdashboard/invoices',
          },
          {
            title: 'Details',
            path: '/exdashboard/invoices/1',
          },
        ],
      },
    ],
  },
  {
    title: '템플릿 예시3',
    items: [
      {
        title: '컴포넌트',
        path: '/exdashboard/browse',
        icon: <UsersIcon fontSize="small" />,
        children: [
          {
            title: 'Browse',
            path: '/exdashboard/browse',
          },
          {
            title: 'Buttons',
            path: '/exdashboard/browse/buttons',
          },
          {
            title: 'Inputs',
            path: '/exdashboard/browse/inputs',
          },
          {
            title: 'Charts',
            path: '/exdashboard/browse/charts',
          },
          {
            title: 'Colors',
            path: '/exdashboard/browse/colors',
          },
          {
            title: 'Detail-lists',
            path: '/exdashboard/browse/data-display/detail-lists',
          },
          {
            title: 'Quick Starts',
            path: '/exdashboard/browse/data-display/quick-stats',
          },
          {
            title: 'Tables',
            path: '/exdashboard/browse/data-display/tables',
          },
          {
            title: 'Forms',
            path: '/exdashboard/browse/forms',
          },
          {
            title: 'Modals',
            path: '/exdashboard/browse/modals',
          },
          {
            title: 'Grouped Lists',
            path: '/exdashboard/browse/lists/grouped-lists',
          },
          {
            title: 'Grid Lists',
            path: '/exdashboard/browse/lists/grid-lists',
          },
          {
            title: 'Typography',
            path: '/exdashboard/browse/typography',
          },
        ],
      },
    ],
  },
  // {
  //   title: 'Platforms',
  //   items: [
  //     {
  //       title: 'Projects',
  //       path: '/dashboard/projects',
  //       icon: <BriefcaseIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'Browse',
  //           path: '/dashboard/projects/browse',
  //         },
  //         {
  //           title: 'Details',
  //           path: '/dashboard/projects/1',
  //         },
  //         {
  //           title: 'Create',
  //           path: '/dashboard/projects/new',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Social',
  //       path: '/dashboard/social',
  //       icon: <ShareIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'Profile',
  //           path: '/dashboard/social/profile',
  //         },
  //         {
  //           title: 'Feed',
  //           path: '/dashboard/social/feed',
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default SidebarSection;
