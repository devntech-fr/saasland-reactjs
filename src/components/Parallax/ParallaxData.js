const exampleParallaxData = [
    {
        start: 700,
        duration: 100,
        properties: [
            {
                startValue: -100,
                endValue: -20,
                property: "translateY"
            },
            {
                startValue: 1,
                endValue: 20,
                property: "translateX"
            },
            {
                startValue: 0,
                endValue: 20,
                property: "translate"
            },
            {
                startValue: 0,
                endValue: 2,
                property: "translateY"
            }
        ]
    }
];
const exampleParallaxDatas = [
    {
        start: 700,
        duration: 100,
        properties: [
            {
                startValue: 100,
                endValue: 30,
                property: "translateY"
            },
            {
                startValue: 1.5,
                endValue: -20,
                property: "translateX"
            },
            {
                startValue: 0,
                endValue: 20,
                property: "translate"
            },
            {
                startValue: 0,
                endValue: 5,
                property: "translateY"
            }
        ]
    }
];

export default {
    exampleParallaxData,
    exampleParallaxDatas
}
