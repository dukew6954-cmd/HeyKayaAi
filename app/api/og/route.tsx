import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'HeyKayaAI'
  const description = searchParams.get('description') || 'Never miss another call with AI'
 
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
          backgroundImage: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
              }}
            />
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: 'white',
              fontFamily: 'system-ui',
            }}
          >
            HeyKayaAI
          </div>
        </div>
        
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            maxWidth: 800,
            marginBottom: 20,
            fontFamily: 'system-ui',
          }}
        >
          {title}
        </div>
        
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            maxWidth: 800,
            fontFamily: 'system-ui',
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}




