interface Properties {
    state: number;
    visible: boolean;
}

export default function Listing(properties: Properties) {
    return properties.visible ? (
        <p>
            I am the content, with the value of state ={" "}
            {typeof properties.state !== "number"
                ? `${properties.state} (it shouldn't be of type ${typeof properties.state}, ESLint should tell you that)`
                : properties.state}
        </p>
    ) : null;
}
