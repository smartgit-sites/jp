document.addEventListener("DOMContentLoaded", function() {
    const feedbackTypeInputs = document.querySelectorAll('input[name="feedbackType"]');
    const channelInfos = document.querySelectorAll(".channel-info");

    // Store query params data
    let querySubject = "";
    let querySystemDetails = "";

    // Channel mapping for feedback types
    const channelMap = {
        "question": "reddit",
        "bug": "reddit",
        "feature": "userecho",
        "confidential": "webform"
    };

    // Parse URL query parameters
    function parseQueryParams() {
        const params = new URLSearchParams(window.location.search);
        const subject = params.get("SUBJECT") || params.get("subject") || "";
        const body = params.get("BODY") || params.get("body") || "";
        return { subject, body };
    }

    // Parse system details from body text
    function parseSystemDetails(body) {
        const lines = body.split("\n");
        const systemDetails = [];
        let inSystemDetails = false;

        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.toLowerCase() === "system details") {
                inSystemDetails = true;
                continue;
            }
            if (inSystemDetails && trimmed) {
                systemDetails.push(trimmed);
            }
        }

        return systemDetails.join("\n");
    }

    // Initialize from query parameters
    function initFromQueryParams() {
        const { subject, body } = parseQueryParams();

        if (subject) {
            let cleanSubject = subject;
            const feedbackPrefix = /^Feedback to SmartGit\s*[\d.]+\s*(Preview|RC\d*|Final)?\s*-?\s*/i;
            cleanSubject = cleanSubject.replace(feedbackPrefix, "").trim();

            if (!cleanSubject) {
                cleanSubject = "SmartGit Feedback";
            }
            querySubject = cleanSubject;
        }

        if (body) {
            const systemDetails = parseSystemDetails(body);
            if (systemDetails) {
                querySystemDetails = systemDetails;
            }
        }

        // Update email fallback link with query parameters
        updateEmailFallbackLink(subject, body);
    }

    // Update the email fallback link to include query parameters
    function updateEmailFallbackLink(subject, body) {
        const emailLinkContainer = document.getElementById("email-fallback-link");
        if (emailLinkContainer && (subject || body)) {
            const params = new URLSearchParams();
            if (subject) params.append("SUBJECT", subject);
            if (body) params.append("BODY", body);

            const mailtoLink = `mailto:smartgit@syntevo.com?${params.toString()}`;
            emailLinkContainer.innerHTML = `<a href="${mailtoLink}">smartgit@syntevo.com</a>`;
        }
    }

    // Update visible channel recommendation
    function updateChannel(feedbackType) {
        const channel = channelMap[feedbackType] || "reddit";

        channelInfos.forEach(info => {
            if (info.dataset.channel === channel) {
                info.classList.remove("d-none");
            } else {
                info.classList.add("d-none");
            }
        });
    }

    // Build message with system details
    function buildMessageWithSystemDetails() {
        let message = "";
        if (querySystemDetails) {
            message = "\n\n---\n**System Details:**\n```\n" + querySystemDetails + "\n```";
        }
        return message;
    }

    // Copy text to clipboard
    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error("Failed to copy to clipboard:", err);
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand("copy");
                document.body.removeChild(textarea);
                return true;
            } catch (e) {
                document.body.removeChild(textarea);
                return false;
            }
        }
    }

    // Handle Reddit submission
    async function handleReddit() {
        const subject = querySubject || "SmartGit Feedback";
        const systemDetailsText = buildMessageWithSystemDetails();
        const redditContent = "**" + subject + "**\n\n" + systemDetailsText;

        await copyToClipboard(redditContent);
        window.open("https://www.reddit.com/r/SmartGit/submit?type=TEXT", "_blank");
    }

    // Handle UserEcho submission
    async function handleUserEcho() {
        const subject = querySubject || "SmartGit Feature Request";
        const userEchoContent = "**" + subject + "**\n\n";

        await copyToClipboard(userEchoContent);
        window.open("https://smartgit.userecho.com/", "_blank");
    }

    // Event listeners for feedback type selection
    feedbackTypeInputs.forEach(input => {
        input.addEventListener("change", function() {
            updateChannel(this.value);
        });
    });

    // Event listeners for action buttons
    const btnReddit = document.getElementById("btn-reddit");
    const btnUserEcho = document.getElementById("btn-userecho");

    if (btnReddit) {
        btnReddit.addEventListener("click", handleReddit);
    }

    if (btnUserEcho) {
        btnUserEcho.addEventListener("click", handleUserEcho);
    }

    // Initialize
    initFromQueryParams();

    const checkedType = document.querySelector('input[name="feedbackType"]:checked');
    if (checkedType) {
        updateChannel(checkedType.value);
    }
});
