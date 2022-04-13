import ReachedItem from './ReachedItem';

export default function Reached() {
    return (
        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <ReachedItem category="Players Top Up" amount="290M+" isLined />
                    <ReachedItem category="Games Available" amount="12.500" isLined />
                    <ReachedItem category="Happy Players" amount="99,9%" isLined />
                    <ReachedItem category="Rating Worlwide" amount="4.7" />
                </div>
            </div>
        </section>
    );
}
