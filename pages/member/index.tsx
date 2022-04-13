import MemberContentOverview from '../../components/organisms/MemberContentOverview';
import SideBar from '../../components/organisms/SideBar';

export default function index() {
    return (
        <section className="overview overflow-auto">
            <SideBar activeMenu="overview" />
            <MemberContentOverview />
        </section>

    );
}
