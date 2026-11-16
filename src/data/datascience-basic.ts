export type ResourceCategory = "slides" | "datasets" | "code";

export interface CourseResource {
    id: string;
    title: string;
    category: ResourceCategory;
    format: string;
    description: string;
    filename?: string;
    origin: "PhD course" | "Big Data course";
    // Replace null with the final download URL when the material is ready.
    href: string | null;
}

// Adapted from sandbox/bigdata-icetex.html and the local PhD.DataScience.Basic
// slide decks. Source files remain in their original folders.
export const courseModules = [
    {
        number: "00",
        title: "Course introduction",
        summary: "Your research question is the starting point.",
        topics: "Research context, expectations, participation",
        learning: "Connect data science to your doctoral project and discuss the data you already use or need to collect.",
        activity: "Introduce your research question, the data it requires, and one challenge you would like to solve during the course.",
        resource: "slides-introduction",
    },
    {
        number: "01",
        title: "Data science foundations",
        summary: "How observations become evidence.",
        topics: "The data science process, data sources, the Big Data Vs",
        learning: "Understand how domain knowledge, statistics, and computing work together. Discuss volume, variety, velocity, and the quality and value of data.",
        activity: "Map a research project from its question to data collection, exploration, analysis, and interpretation. Identify where you might need to revisit an earlier step.",
        resource: "slides-foundations",
    },
    {
        number: "02",
        title: "A gentle introduction to AI",
        summary: "The basic ideas behind learning from data.",
        topics: "Descriptive and predictive analysis, machine learning, evaluation",
        learning: "Distinguish describing a dataset from predicting an outcome. Explore how models learn patterns and why evaluation on unseen data matters.",
        activity: "Choose a possible prediction task in your field. Describe its inputs, expected output, a simple baseline, and how you would assess its results.",
        resource: "slides-ai",
    },
    {
        number: "03",
        title: "Data, formats, and research reuse",
        summary: "Make a dataset understandable to someone else.",
        topics: "Metadata, CSV / DSV, JSON, XML, ETL, licensing, FAIR",
        learning: "Recognize structured, semi-structured, and unstructured data. Explain extraction, transformation, and loading, and document data with metadata and reuse conditions.",
        activity: "Inspect the file examples in the resource library. Prepare a small dataset with a data dictionary, a description of its origin, and a record of your cleaning decisions.",
        resource: "slides-data",
    },
    {
        number: "04",
        title: "Text as data with Python",
        summary: "A first analysis of a collection of documents.",
        topics: "Python, pandas, tokenization, stopwords, bag of words, charts",
        learning: "Follow a basic NLP workflow from a delimited text file to a frequency chart. Compare preprocessing choices and explain what a bag-of-words representation leaves out.",
        activity: "Load a text column, inspect it, tokenize it, and count terms. Create a labelled chart and explain how your cleaning choices affect its interpretation.",
        resource: "slides-nlp",
    },
];

export const resourceCategories: { id: ResourceCategory; label: string }[] = [
    { id: "slides", label: "Slides" },
    { id: "code", label: "Python code & practice" },
    { id: "datasets", label: "Datasets & file examples" },
];

export const courseResources: CourseResource[] = [
    {
        id: "slides-introduction", title: "Course introduction", category: "slides", format: "PPTX",
        description: "Course expectations, introductions, and the role of data in your research.",
        filename: "0.presentation.pptx", origin: "PhD course", href: null,
    },
    {
        id: "slides-foundations", title: "Data science foundations", category: "slides", format: "PPTX",
        description: "The data science process, research applications, and the characteristics of Big Data.",
        filename: "1.basic.datascience.pptx", origin: "PhD course", href: null,
    },
    {
        id: "slides-ai", title: "A gentle introduction to AI", category: "slides", format: "PPTX",
        description: "An introduction to AI, machine learning, model training, and evaluation.",
        filename: "2.GentleAIIntroduction.pptx", origin: "PhD course", href: null,
    },
    {
        id: "slides-data", title: "Data concepts", category: "slides", format: "PPTX",
        description: "Data and metadata, file formats, ETL, research data licensing, FAIR, and data catalogues.",
        filename: "3.DataConcepts.pptx", origin: "PhD course", href: null,
    },
    {
        id: "slides-nlp", title: "Natural language processing", category: "slides", format: "PPTX",
        description: "Text representations, preprocessing, and a Python workflow from a DSV file to a chart.",
        filename: "4.NaturalLanguageProgramming.pptx", origin: "PhD course", href: null,
    },
    {
        id: "slides-practice", title: "Python + NLP hands-on practice", category: "slides", format: "PPTX",
        description: "The practice deck covering pandas, NLTK, word frequencies, and visualization.",
        filename: "[Py+NLP]Practice 1.pptx", origin: "PhD course", href: null,
    },
    {
        id: "dataset-csv", title: "Comma-separated values", category: "datasets", format: "CSV",
        description: "Identify headers, rows, quoted fields, and the comma delimiter in a tabular file.",
        filename: "dataset1.csv", origin: "Big Data course", href: null,
    },
    {
        id: "dataset-dsv", title: "Semicolon-separated values", category: "datasets", format: "DSV",
        description: "Compare a semicolon delimiter with a comma delimiter and inspect how the file imports.",
        filename: "dataset2.csv", origin: "Big Data course", href: null,
    },
    {
        id: "dataset-utf8", title: "Delimiters and UTF-8 encoding", category: "datasets", format: "DSV",
        description: "Practice reading delimited data while preserving accented characters and other text.",
        filename: "dataset3-utf8.dsv", origin: "Big Data course", href: null,
    },
    {
        id: "dataset-xml", title: "XML file example", category: "datasets", format: "XML",
        description: "Inspect nested elements, tags, and the structure of an XML document.",
        filename: "dataset4.xml", origin: "Big Data course", href: null,
    },
    {
        id: "dataset-json", title: "Simple JSON example", category: "datasets", format: "JSON",
        description: "Recognize objects, arrays, keys, and values in a small data exchange example.",
        filename: "dataset5.json", origin: "Big Data course", href: null,
    },
    {
        id: "dataset-social", title: "Social media JSON examples", category: "datasets", format: "JSON",
        description: "Historical WRadioColombia examples, including extended entities, retweets, and quoted posts, for exploring nested data.",
        filename: "WRadioColombia*.json", origin: "Big Data course", href: null,
    },
    {
        id: "dataset-ppm", title: "Satellite image example", category: "datasets", format: "PPM / BZ2",
        description: "Optional extension: inspect a grayscale satellite image as an example of data beyond tables.",
        filename: "satelite-1024x1024-Colombia.bz2", origin: "Big Data course", href: null,
    },
    {
        id: "code-kmeans", title: "K-means clustering notebook", category: "code", format: "IPYNB",
        description: "A Python notebook on grouping observations with K-means and interpreting the resulting clusters.",
        origin: "PhD course", href: null,
    },
    {
        id: "code-decision-trees", title: "Decision trees notebook", category: "code", format: "IPYNB",
        description: "A Python notebook on building, evaluating, and interpreting decision-tree models.",
        origin: "PhD course", href: null,
    },
    {
        id: "code-extraction", title: "Web text extraction", category: "code", format: "PYTHON",
        description: "The Don Quijote extraction example for discussing how raw text enters an analysis workflow.",
        filename: "GetQuijote.py", origin: "Big Data course", href: null,
    },
    {
        id: "code-nlp", title: "NLP and basic visualization", category: "code", format: "PYTHON / ZIP",
        description: "The earlier text analysis practice, to accompany the new course's DSV-to-chart exercise.",
        filename: "test-NLP-python.zip", origin: "Big Data course", href: null,
    },
];
