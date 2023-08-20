import TopNav from "./TopNav";

export default function Layout({children}) {
  return (
    <div className="container container-fluid">
      <TopNav/>
      <main>{children}</main>
    </div>
  );
}
