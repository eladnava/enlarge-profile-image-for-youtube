// Define search and replace terms for image src link
var search = "s100";
var replace = "s512";

function getProfileImageContainer() {
    // Get profile image containers
    return $(".channel-header-profile-image-container");
}

function getProfileImage(container) {
    // Get profile image tag
    return container.find("img");
}

function injectEnlargeLink() {
    // Get profile image link
    var imageContainer = getProfileImageContainer();

    // No image?
    if (!imageContainer.length) {
        return;
    }

    // Get img tag
    var imageTag = getProfileImage(imageContainer);

    // No tag?
    if (!imageTag.length) {
        return;
    }

    // Get image src
    var src = imageTag.attr('src');

    // Replace image pixel value in URL
    src = src.replace(search, replace);

    // Set link to point to the larger image
    imageContainer.attr('href', src);

    // Open in a new tab
    imageContainer.attr('target', '_blank');
}

// One-time injection
injectEnlargeLink();