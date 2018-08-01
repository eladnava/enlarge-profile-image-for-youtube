// Define search and replace terms for image src link
let search = /s[0-9]+/g;
let replace = 's512';

function getProfileImageContainer() {
    // Get profile image containers
    return $('#channel-header-container');
}

function getProfileImage(container) {
    // Get profile image tag
    return container.find('img');
}

function wrapEnlargeLink() {
    // Get profile image link
    let imageContainer = getProfileImageContainer();

    // No image?
    if (!imageContainer.length) {
        return;
    }

    // Get img tag nested within container
    let imageTag = getProfileImage(imageContainer);

    // No tag?
    if (!imageTag.length) {
        return;
    }

    // Get image src URL
    let src = imageTag.attr('src');

    // Replace image pixel value in URL for a larger 512px image
    src = src.replace(search, replace);

    // Wrap image tag with a link that points to the larger image
    $( imageTag ).wrap( "<a href='" + src + "' target='_blank'></a>" );
}

// One-time injection
wrapEnlargeLink();