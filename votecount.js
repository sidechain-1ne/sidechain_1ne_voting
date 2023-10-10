// Import the voteCounts object from vote.js
const { voteCounts } = require('./vote');

// Function to get real-time vote counts
function getVoteCounts() {
    const totalVotes = Object.values(voteCounts).reduce((a, b) => a + b, 0);

    const results = Object.keys(voteCounts).map(option => {
        const percentage = (voteCounts[option] / totalVotes) * 100;
        return `${option} → ${Math.round(percentage)}%`;
    });

    return results.join(' | ');
}

// Export the function for use in Nightbot command
module.exports = getVoteCounts;
