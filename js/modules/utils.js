const clickOut = (target, ref) => {
    return !ref.contains(target);
};

const normalize = (string) => {
    string.normalize('NFD').toLowerCase();
}

const utils = {
    clickOut,
    normalize
}

export default utils;
