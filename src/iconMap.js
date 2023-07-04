export const ICON_MAP = new Map();

AddMapping([0 , 1] , "sun");
AddMapping([2] , "cloud-sun");
AddMapping([3] , "cloud");
AddMapping([45 , 48], "smog");
AddMapping(
    [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
    "cloud-showers-heavy"
    );
AddMapping([71, 73, 75, 77, 85, 86], "snowflake");
AddMapping([95, 96, 99], "cloud-bolt");

function AddMapping(values , icon) {
    values.forEach(value => 
        ICON_MAP.set(value , icon));
}

//ICON_MAP.get(0); is going to return the icon code for the current weather 