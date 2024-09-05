import SelectBox from "../component/selectBox/SelectBox";

const SelectBoxPage = () => {

    const author = [
        {label: '김인육', value: 'A01'},
        {label: '이육사', value: 'A02'},
        {label: '윤동주', value: 'A03'}
    ]

    return (
        <div>
            <div><span>사랑의 물리학 / </span><SelectBox data={author}/></div>

            질량의 크기는 부피와 비례하지 않는다

            제비꽃같이 조그마한 그 계집애가
            꽃잎같이 하늘거리는 그 계집애가
            지구보다 더 큰 질량으로 나를 끌어당긴다.
            순간, 나는
            뉴턴의 사과처럼
            사정없이 그녀에게로 굴러 떨어졌다
            쿵 소리를 내며, 쿵쿵 소리를 내며

            심장이
            하늘에서 땅까지

            아찔한 진자운동을 계속하였다
            첫사랑이었다.
        </div>
    );
};

export default SelectBoxPage;