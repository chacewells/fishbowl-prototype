import TopNav from "./TopNav";

export default function Layout({children}) {
  return (
    <>
      <TopNav/>
      <div className="container container-fluid">
        <main>{children}</main>
      </div>
    </>
  );
}
