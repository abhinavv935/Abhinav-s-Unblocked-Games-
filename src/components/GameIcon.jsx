import { 
  Flame, 
  Tv2, 
  Layers, 
  Wind, 
  Rocket, 
  Bomb, 
  Grid3X3, 
  Hexagon, 
  Gamepad2,
  Heart,
  Star,
  Search,
  Maximize2,
  ArrowLeft,
  Info,
  Sparkles,
  Zap,
  Play
} from 'lucide-react';

export default function GameIcon({ name, className = '' }) {
  switch (name) {
    case 'Flame': return <Flame className={className} />;
    case 'Tv2': return <Tv2 className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Rocket': return <Rocket className={className} />;
    case 'Bomb': return <Bomb className={className} />;
    case 'Grid3X3': return <Grid3X3 className={className} />;
    case 'Hexagon': return <Hexagon className={className} />;
    case 'Heart': return <Heart className={className} fill="currentColor" />;
    case 'Star': return <Star className={className} fill="currentColor" />;
    case 'Search': return <Search className={className} />;
    case 'Maximize2': return <Maximize2 className={className} />;
    case 'ArrowLeft': return <ArrowLeft className={className} />;
    case 'Info': return <Info className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Play': return <Play className={className} />;
    default: return <Gamepad2 className={className} />;
  }
}
