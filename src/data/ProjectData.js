// json array data format

const base = "https://source.unsplash.com";
const dimensions = "640x420";

export const componentTitle = "My Work";
export const componentDescription = "Here are some of my projects.";


export const projectJsonArray = [
    {
        id: 0,
        title: "Housing Prices Advanced",
        image: base + "/" + "g39p1kDjvSY" + "/" + dimensions,
        description: "Housing prices advanced kernel from kaggle.",
        icon: "kaggle",
        target_url:"https://www.kaggle.com/srimanth98/data-cleaning-eda-plotly-feat-engg-lasso"
    },
    {
        id: 1,
        title: "YouTube Sentiment Analysis",
        image:  base + "/" + "niUkImZcSP8" + "/" + dimensions,
        description: "A dashboard, created for naive users to analyze youtube comments.",
        icon: "github",
        target_url:"https://www.kaggle.com/srimanth98/data-cleaning-eda-plotly-feat-engg-lasso"
    },
    {
        id: 2,
        title: "Data Explorer",
        image: base + "/" + "JKUTrJ4vK00" + "/" + dimensions,
        description: "An application which allows the user to read and clean a relational \
        dataset, build a few plots off the dataset and allows the user to \
        select the features and the ML algorithm based on the plot info. \
        Developed using Dash by Plotly.",
        icon: "github",
        target_url:"https://www.kaggle.com/srimanth98/data-cleaning-eda-plotly-feat-engg-lasso"
    }
]
