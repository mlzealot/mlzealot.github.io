// json array data format

const base = "https://source.unsplash.com";
const dimensions = "640x420";

export const componentTitle = "My Work";
export const componentDescription = "Here are some of my projects.";


export const projectJsonArray = [
    {
        id: 6,
        title: "Tree of Life visualizations for Human Anatomy",
        image: `${base}/ZiQkhI7417A/${dimensions}`,
        description: "Converts a flat CSV dataset to a hierarchical data. \
        Uses d3.js to visualize hierarchy in a radial tree.",
        links: [
            {
                icon:"github",
                iconType: "fab",
                url:"https://github.com/mlzealot/tree-of-life",
                button_text:"GitHub",
            },
            {
                icon:"caret-up",
                iconType: "fas",
                url:"https://mlzealot.github.io/tree-of-life/",
                button_text:"Interactive Demo",
            },
            {
                icon:"database",
                iconType: "fas",
                url:"https://hubmapconsortium.github.io/ccf-asct-reporter/",
                button_text:"Data",
            },
        ],
    },
    {
        id: 5,
        title: "Optical Character Recognition using Probabilistic Models",
        image: `${base}/lMiYuow_KZE/${dimensions}`,
        description: "Deployed a Bayesian network and a Hidden Markov Model to achieve an accuracy of 94.2% over novel data. \
        Implemented viterbi algorithm for Maximum A Posteriori (MAP) inference to predict the final character sequence.",
        links: [
            {
                icon:"github",
                iconType: "fab",
                url:"https://github.com/srimanth98/Optical-Character-Recognition-using-Probabilistic-Models",
                button_text:"GitHub",
            },
        ],
    },
    {
        id: 4,
        title: "Game Playing AI for Tetris",
        image: `${base}/xLzdUCDRwco/${dimensions}`,
        description: "Deployed a Game Playing Artificial Intelligence model to achieve a score over 500. \
        Implemented expectiminimax algorithm and one-step look ahed to predict the current and the next incoming piece in the game.",
        links: [
            {
                icon:"github",
                iconType: "fab",
                url:"https://github.com/srimanth98/Game-Playing-AI-for-Tetris",
                button_text:"GitHub",
            },
        ],
    },
    {
        id: 3,
        title: "Path Finding using A* algorithm",
        image: `${base}/Z8UgB80_46w/${dimensions}`,
        description: "Calculated the path with the least distance, road segments and time between any two cities in USA. \
        A* algorithm (admissible and consistent heuristic) used for path finding.",
        links: [
            {
                icon:"github",
                iconType: "fab",
                url:"https://github.com/srimanth98/Path-Finding-Using-A_star-Algorithm",
                button_text:"GitHub",
            },
        ],
    },
    {
        id: 2,
        title: "Data Explorer",
        image: `${base}/JKUTrJ4vK00/${dimensions}`,
        description: "An application which allows the user to read and clean a relational \
        dataset, build a few plots off the dataset and allows the user to \
        select the features and the ML algorithm based on the plot info. \
        Developed using Dash by Plotly.",
        links: [
            {
                icon:"github",
                iconType: "fab",
                url:"https://github.com/srimanth98/Data-Explorer",
                button_text:"GitHub",
            },
        ],
    },
    {
        id: 1,
        title: "Sentiment Analysis of YouTube comments",
        image: `${base}/niUkImZcSP8/${dimensions}`,
        description: "Achieved an accuracy of 88% over novel data by extracting data using YouTube Data API v3. \
        Developed using NLP techniques such as Stemming, TF-IDF, Word2Vec, Logistic Regressor and XGBoost.",
        links: [
            {
                icon:"github",
                iconType: "fab",
                url:"https://www.kaggle.com/srimanth98/data-cleaning-eda-plotly-feat-engg-lasso",
                button_text:"GitHub"
            },
            // {
            //     icon:"kaggle",
            //     url:"https://www.kaggle.com/srimanth98/data-cleaning-eda-plotly-feat-engg-lasso",
            //     button_text:"Kaggle"
            // },
            // {
            //     icon:"medium",
            //     url:"https://www.kaggle.com/srimanth98/data-cleaning-eda-plotly-feat-engg-lasso",
            //     button_text:"Medium"
            // },  
        ],
    },
    {
        id: 0,
        title: "Housing Prices Advanced",
        image: `${base}/g39p1kDjvSY/${dimensions}`,
        description: "This is a LASSO model on the Housing prices advanced kernel from kaggle.",
        links: [
            {
                icon:"kaggle",
                iconType: "fab",
                url:"https://www.kaggle.com/srimanth98/data-cleaning-eda-plotly-feat-engg-lasso",
                button_text:"Kaggle"
            },
        ],
    },
]
