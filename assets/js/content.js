// Define search and replace terms for image src link
let search = /s[0-9]+\-/g;
let replace = 's512-';

function getProfileImage(container) {
    // Get profile image tag
    return $('.yt-core-image');
}

function wrapEnlargeLink() {
    // Get img tag nested within container
    let imageTag = getProfileImage();

    // No tag?
    if (!imageTag.length) {
        return;
    }

    // Get image src URL
    let src = imageTag.attr('src');

    // Source not set yet?
    if (!src) {
        return;
    }

    // Replace image pixel value in URL for a larger 512px image
    src = src.replace(search, replace);

    // Already wrapped in a link?
    if (imageTag.parent().is('a')) {
        // Modify its src
        imageTag.parent().attr('href', src);
    }
    else {
        // Wrap image tag with a link that points to the larger image
        $(imageTag).wrap( "<a href='" + src + "' target='_blank'></a>" );
    }
}

// Ugly hack
// TODO: Find a cleaner way to do this
setInterval(wrapEnlargeLink, 500);