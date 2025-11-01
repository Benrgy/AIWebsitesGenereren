# GitPage Builder - Setup & Usage Guide

## 🚀 Quick Start

### 1. Sign Up
- Visit the app and click "Sign Up"
- Enter your email and password (min 6 characters)
- Email confirmation is auto-enabled for faster testing

### 2. Configure GitPage API Key
1. Go to [GitPage.site](https://www.gitpage.site) and get your API key
2. In the app, navigate to **Dashboard → Settings**
3. Paste your GitPage API key and save

### 3. Generate Websites
1. Go to **Dashboard → Generate**
2. Fill in the form:
   - **Keyword**: Your main topic (e.g., "AI Automation Agency")
   - **Variations**: Choose 5-100 websites
   - **Language**: Select target language
   - **Contact Email**: Your business email
   - **CTA Link**: Your call-to-action URL
3. Click "Generate Websites"

## 🔄 How It Works

### Content Generation Flow
```
User Input → Edge Function (generate-content) 
          → Gemini AI generates unique variations
          → Stored in database with "pending" status
          → Returns to user
```

### Deployment Flow (Automated)
```
Submission Scheduler (every 5 min)
          → Edge Function (submit-to-gitpage)
          → Picks 1 pending variation
          → Submits to GitPage API
          → Updates status to "submitted" → "success"
          → Live URL stored in database
```

### Rate Limiting
- **Interval**: 5 minutes between submissions
- **Max Rate**: 30 websites per hour per user
- **Respects**: GitPage API rate limits

## 📊 Dashboard Features

### Generate Tab
- Create new website batches
- Configure all parameters in one form
- Instant AI generation

### Batches Tab
- View all your batches
- Click any batch to see variations
- Real-time status updates
- Refresh button for latest data

### Settings Tab
- Manage GitPage API key
- Update profile information

## 🎨 Design System

### Color Scheme
- **Primary**: Blue (#1e40af) - Main brand color
- **Secondary**: Cyan (#06b6d4) - Accent color
- **Gradients**: Blue to cyan for hero elements
- **Status Colors**: 
  - Success: Default (green)
  - Pending/Building: Secondary (blue)
  - Failed: Destructive (red)

### Components
- **Hero Button**: Gradient background with glow effect
- **Glass Button**: Frosted glass effect with backdrop blur
- **Status Badges**: Icon + text with color coding
- **Cards**: Shadow on hover with smooth transitions

## 🔧 Technical Architecture

### Database Schema

**profiles**
- User profile data
- GitPage API key storage
- Auto-created on signup

**website_batch**
- Batch metadata
- User preferences
- Generation status

**website_variations**
- Individual website data
- AI-generated content
- Deployment status & URLs

### Edge Functions

**generate-content**
- **Auth**: Required (user must be logged in)
- **Purpose**: Generate AI content via Gemini
- **Input**: Batch parameters
- **Output**: Multiple website variations

**submit-to-gitpage**
- **Auth**: Public (called by scheduler)
- **Purpose**: Submit pending variations to GitPage
- **Rate Limit**: 1 request per 5 minutes
- **Output**: Live website URL

### Frontend Components

**GenerateForm**
- User input collection
- Form validation
- Batch creation

**BatchList**
- Display batches and variations
- Real-time status updates
- Click-to-view live sites

**SubmissionScheduler**
- Runs every 5 minutes
- Automatic deployment
- Silent operation

**StatusBadge**
- Visual status indicators
- Icon + color coded
- Loading animations

## 🎯 Status States

### Batch Status
- `pending`: Initial state
- `generating`: AI is creating content
- `ready`: Variations created, ready to deploy
- `success`: All variations deployed

### Variation Status
- `pending`: Waiting for AI generation
- `generating`: AI is creating content (not used yet)
- `ready`: Content generated, waiting for deployment
- `submitted`: Sent to GitPage API
- `success`: Deployed and live
- `failed`: Deployment error (check error_message)

## 🚨 Troubleshooting

### No Websites Deploying
1. Check GitPage API key in Settings
2. Verify you have pending variations
3. Wait 5 minutes for next submission cycle
4. Check browser console for errors

### AI Generation Fails
1. Verify Lovable AI credits available
2. Check console for error messages
3. Try with fewer variations first
4. Contact support if persists

### Can't See Batches
1. Make sure you're logged in
2. Try refreshing the page
3. Check RLS policies (admin only)

### Build Errors
- Check edge function logs in Lovable Cloud
- Verify all secrets are configured
- Check database connectivity

## 📈 Best Practices

### For Best Results
1. **Start Small**: Begin with 5-10 variations to test
2. **Clear Keywords**: Use specific, focused keywords
3. **Test Early**: Generate a test batch before bulk
4. **Monitor Status**: Check dashboard regularly
5. **API Key**: Keep your GitPage key secure

### Scaling Up
1. Generate 25-50 variations for campaigns
2. Use different keywords for diversity
3. Monitor rate limits (30/hour)
4. Plan for 5-minute intervals

### Content Quality
- Use specific, descriptive keywords
- Choose appropriate language
- Provide professional contact email
- Use working CTA links

## 🔐 Security

### Data Protection
- Row Level Security (RLS) on all tables
- Users can only see their own data
- API keys encrypted in storage
- Secure authentication via Lovable Cloud

### API Keys
- GitPage keys stored per-user
- Never exposed in client code
- Used only in secure edge functions

## 🎓 Advanced Usage

### Custom Scheduling
- Default: 5-minute intervals
- Modify `SubmissionScheduler.tsx` for different timing
- Be careful with rate limits

### Batch Processing
- Edge functions handle one at a time
- Queue managed automatically
- FIFO (First In, First Out)

### Monitoring
- Check browser console for real-time logs
- View edge function logs in Lovable Cloud
- Monitor database for status changes

## 📞 Support

For issues or questions:
1. Check troubleshooting section above
2. Review edge function logs
3. Check browser console
4. Contact Lovable support

## 🎉 Tips & Tricks

1. **Bulk Generation**: Generate 100 sites takes ~8.5 hours (5 min × 100)
2. **Testing**: Use 5 variations for quick tests
3. **Keywords**: Try variations of same keyword in different batches
4. **Languages**: Generate same keyword in multiple languages
5. **Monitor**: Keep dashboard open to see real-time updates

---

Built with ❤️ using Lovable, Supabase, and AI
