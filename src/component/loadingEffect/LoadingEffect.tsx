import {Component} from "react";
import './LoadingEffect.scss';

export class LoadingEffect extends Component<LoadingEffectProps, LoadingEffectState> {
    state = {
        on: false,
        process: 0
    }

    progressRef: HTMLDivElement | null = null;

    constructor(props: LoadingEffectProps) {
        super(props);
        console.debug('constructor');
    }

    static getDerivedStateFromProps(nextProps: LoadingEffectProps, prevState: LoadingEffectProps): LoadingEffectState | null {
        console.debug("getDerivedStateFromProps");
        const {on, process} = nextProps;
        //100보다 클 수 없게 셋팅
        return { on: on, process: process > 100 ? 100 : process };
    }

    componentDidMount() {
        console.debug("componentDidMount");
    }

    shouldComponentUpdate(nextProps: Readonly<LoadingEffectProps>, nextState: Readonly<LoadingEffectState>, nextContext: any): boolean {
        console.debug('shouldComponentUpdate', nextProps, nextState, nextContext);
        if(!this.state.on && !nextState.on) {
            //off 상태일 경우에는 리랜더링을 안함
            return false;
        }
        //값이 바뀌면 리랜더링
        return this.state.on !== nextState.on || this.state.process !== nextState.process;
    }

    componentWillUnmount() {
        console.debug("componentWillUnmount");
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<LoadingEffectProps>, prevState: Readonly<LoadingEffectState>): any {
        console.debug("getSnapshotBeforeUpdate");
        if (prevProps.process !== this.props.process) {
            return this.progressRef;
        }
        return null;
    }

    componentDidUpdate(prevProps: Readonly<LoadingEffectProps>, prevState: Readonly<LoadingEffectState>, snapshot?: any) {
        console.debug("componentDidUpdate", prevProps, prevState);
        if (snapshot) {
            console.debug("업데이트 되기전의 이미지: ", snapshot);
        }
    }

    render() {
        console.debug("render");
        return (
            <div className={`loading${this.state.on ? ' on' : ''}`}>
                <div>{`로딩 중입니다. ${this.state.process}%`}</div>
                <div className={`loading-bar-container`}>
                    <div className={`loading-bar`} ref={ref => this.progressRef = ref}>
                        <div className={`complete-process`} style={{width: `${this.state.process}%`}}></div>
                        <div className={`remain-process`} style={{width: `${100 - this.state.process}%`}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export const loadingBarReducer = (state: LoadingEffectState, action: LoadingEffectAction): LoadingEffectState => {
    switch (action.type) {
        case "START":
            return { on: true, process: 0 };
        case "RESET":
            return { on: false, process: 0 };
        case "PROCESS":
            return { on: true, process: state.process + 1 };
        default:
            return state;
    }
};

export type LoadingEffectProps = {
    on: boolean;
    process: number;
}

export type LoadingEffectState = {
    on: boolean;
    process: number;
}

export type LoadingEffectAction =
    | {type: 'START'}
    | {type: 'RESET'}
    | {type: 'PROCESS'}