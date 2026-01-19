const fs = require('fs');
const path = require('path');

// Cleanup script to remove previous test execution data
function cleanupReports() {
    // Since this script is in results/playwright-report, __dirname is already the playwright-report directory
    const playwrightReportDir = __dirname;
    const resultsDir = path.join(__dirname, '..');
    const screenshotsDir = path.join(resultsDir, 'screenshots');
    const videosDir = path.join(resultsDir, 'videos');
    
    console.log('🧹 Cleaning up previous test execution data...');
    
    // Files to clean up
    const filesToCleanup = [
        path.join(playwrightReportDir, 'cucumber-bootstrap-report.html'),
        path.join(playwrightReportDir, 'cucumber-bootstrap-report.html.json'),
        path.join(playwrightReportDir, 'cucumber-report.json'),
        path.join(playwrightReportDir, 'cucumber-html-report.html')
    ];
    
    // Clean up report files
    filesToCleanup.forEach(file => {
        if (fs.existsSync(file)) {
            try {
                fs.unlinkSync(file);
                console.log(`✅ Removed: ${path.basename(file)}`);
            } catch (error) {
                console.warn(`⚠️  Warning: Could not remove ${path.basename(file)}:`, error.message);
            }
        }
    });
    
    // Clean up screenshots directory
    if (fs.existsSync(screenshotsDir)) {
        try {
            const screenshots = fs.readdirSync(screenshotsDir);
            screenshots.forEach(file => {
                const filePath = path.join(screenshotsDir, file);
                if (fs.statSync(filePath).isFile()) {
                    fs.unlinkSync(filePath);
                }
            });
            console.log(`✅ Cleaned up ${screenshots.length} screenshot(s)`);
        } catch (error) {
            console.warn('⚠️  Warning: Could not clean screenshots directory:', error.message);
        }
    }
    
    // Clean up videos directory
    if (fs.existsSync(videosDir)) {
        try {
            const videos = fs.readdirSync(videosDir);
            videos.forEach(file => {
                const filePath = path.join(videosDir, file);
                if (fs.statSync(filePath).isFile()) {
                    fs.unlinkSync(filePath);
                }
            });
            console.log(`✅ Cleaned up ${videos.length} video(s)`);
        } catch (error) {
            console.warn('⚠️  Warning: Could not clean videos directory:', error.message);
        }
    }
    
    console.log('🎉 Cleanup completed successfully!');
}

// Run cleanup if this script is executed directly
if (require.main === module) {
    cleanupReports();
}

module.exports = { cleanupReports };
