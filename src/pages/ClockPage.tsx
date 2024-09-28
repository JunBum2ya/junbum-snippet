import React, {Suspense} from "react";

const AnalogClock = React.lazy(() => import('../component/clock/AnalogClock'));

const ClockPage = () => {

    return (
        <Suspense fallback={<div>loading....</div>}>
            <AnalogClock/>
        </Suspense>
    );
};

export default ClockPage;