// import icon

import HomeIcon from "@material-ui/icons/Home"; //dashboard
import LocalAtmIcon from "@material-ui/icons/LocalAtm"; //CashFlow icon
import ReceiptIcon from "@material-ui/icons/Receipt"; //Report icon
import AssignmentIcon from "@material-ui/icons/Assignment"; //Invoice icon
import PaymentIcon from "@material-ui/icons/Payment"; //Loan Agreement icon

import AttachMoneyTwoToneIcon from "@material-ui/icons/AttachMoneyTwoTone"; // investment

import StoreMallDirectoryTwoToneIcon from "@material-ui/icons/StoreMallDirectoryTwoTone"; //販售商品 marchandise
import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone"; //deli pay 交貨款

import SettingsIcon from "@material-ui/icons/Settings"; //setup 設定

//import History Chart
import Dashboard from "./Views/Dashboard/Dashboard";
import CashFlow from "./components/HistoryChart/CashFlow";
import Report from "./components/HistoryChart/Report";
import Invoice from "./components/HistoryChart/Invoice";
import LoanAgreement from "./components/HistoryChart/LoanAgreement";
import Setup from "./Views/Setup/Setup";

const routes_retailer = [
  {
    path: "/dashboard",
    name: "決策中心",
    icon: HomeIcon,
    component: Dashboard,
    layout: "/retaileradmin",
  },
  {
    path: "/cashflow",
    name: "現金流",
    icon: LocalAtmIcon,
    component: CashFlow,
    layout: "/retaileradmin",
  },
  {
    path: "/report",
    name: "歷年報表",
    icon: ReceiptIcon,
    component: Report,
    layout: "/retaileradmin",
  },
  {
    path: "/invoice",
    name: "交易契約 ",
    icon: AssignmentIcon,
    component: Invoice,
    layout: "/retaileradmin",
  },
  {
    path: "/loanagreemen",
    name: "借貸契約 ",
    icon: PaymentIcon,
    component: LoanAgreement,
    layout: "/retaileradmin",
  },
  {
    path: "/setup",
    name: "設定 ",
    icon: SettingsIcon,
    component: Setup,
    layout: "/retaileradmin",
  },
];
export default routes_retailer;
