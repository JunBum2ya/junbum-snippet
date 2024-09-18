import {useDispatch} from "react-redux";
import React, {useMemo} from "react";
import {bindActionCreators} from "redux";

const useActions = (actions: Array<any>, deps: React.DependencyList) => {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            return actions.map(a => bindActionCreators(a, dispatch));
        },
        deps ? [dispatch, ...deps] : deps
    );
};

export default useActions;