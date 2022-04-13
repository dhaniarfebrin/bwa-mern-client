import Footer from './Footer';
import MenuItem from './MenuItem';
import UserProfile from './UserProfile';

interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'messages' | 'card' | 'rewards' | 'settings' | 'logout'
}

export default function SideBar(props: SideBarProps) {
    const { activeMenu } = props;

    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <UserProfile />
                <div className="menus">
                    <MenuItem icon="overview" title="Overview" href="/member" active={activeMenu === 'overview'} />
                    <MenuItem icon="transactions" title="Transactions" href="/member/transactions" active={activeMenu === 'transactions'} />
                    <MenuItem icon="messages" title="Messages" href="/member" />
                    <MenuItem icon="card" title="Cards" href="/member" />
                    <MenuItem icon="rewards" title="Rewards" href="/member" />
                    <MenuItem icon="settings" title="Settings" href="/member/edit-profile" active={activeMenu === 'settings'} />
                    <MenuItem icon="logout" title="Log out" href="/member" />
                </div>
                <Footer />
            </div>
        </section>
    );
}
