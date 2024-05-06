const Layout = ({ page, children }) => (
    <div className="layout" data-page={page}>
        {children}
    </div>
)

export default Layout;