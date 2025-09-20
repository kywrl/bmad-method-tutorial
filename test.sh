#!/bin/bash

# BMAD Tutorial Website Test Script
echo "🧪 Testing BMAD Tutorial Website..."

# Check if all required files exist
echo "📁 Checking file structure..."

required_files=(
    "index.html"
    "README.md"
    "js/main.js"
    "js/content-beginner.js"
    "js/content-intermediate.js"
    "js/content-intermediate-advanced.js"
    "js/content-advanced.js"
    "js/content-case-studies.js"
    "js/search.js"
)

missing_files=()

for file in "${required_files[@]}"; do
    if [[ -f "$file" ]]; then
        echo "✅ $file"
    else
        echo "❌ $file (missing)"
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -gt 0 ]; then
    echo "⚠️  Missing files: ${missing_files[*]}"
    exit 1
fi

# Check HTML structure
echo ""
echo "🔍 Validating HTML structure..."

# Check for essential HTML elements
if grep -q "id=\"sidebar\"" index.html; then
    echo "✅ Sidebar navigation found"
else
    echo "❌ Sidebar navigation missing"
fi

if grep -q "id=\"content\"" index.html; then
    echo "✅ Main content area found"
else
    echo "❌ Main content area missing"
fi

if grep -q "id=\"progress-bar\"" index.html; then
    echo "✅ Progress bar found"
else
    echo "❌ Progress bar missing"
fi

# Check JavaScript files for syntax errors (basic check)
echo ""
echo "🔧 Checking JavaScript files..."

for js_file in js/*.js; do
    if node -c "$js_file" 2>/dev/null; then
        echo "✅ $js_file (syntax OK)"
    else
        echo "❌ $js_file (syntax error)"
    fi
done

# Check for required CSS frameworks
echo ""
echo "🎨 Checking CSS dependencies..."

if grep -q "tailwindcss" index.html; then
    echo "✅ Tailwind CSS found"
else
    echo "❌ Tailwind CSS missing"
fi

if grep -q "highlight.js" index.html; then
    echo "✅ Highlight.js found"
else
    echo "❌ Highlight.js missing"
fi

echo ""
echo "🎉 Website structure validation complete!"
echo ""

# Offer to start local server
echo "🚀 Would you like to start a local development server? (y/n)"
read -r answer

if [[ $answer == "y" || $answer == "Y" || $answer == "yes" ]]; then
    echo "Starting local server on port 8000..."
    echo "Visit: http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""

    # Check if python3 is available
    if command -v python3 &> /dev/null; then
        python3 -m http.server 8000
    elif command -v python &> /dev/null; then
        python -m http.server 8000
    else
        echo "❌ Python not found. Please install Python or use another static file server."
        echo "Alternative: npx serve . or use VS Code Live Server extension"
    fi
fi