

export default function ProgramCard({
  title,
  ageGroup,
  description,
  bgColor,
  accentColor,
  highlight = false
}: {
  title: string;
  ageGroup: string;
  description: string;
  bgColor: string;
  accentColor: string;
  highlight?: boolean;
}) {
  return (
    <div className={`${bgColor} rounded-lg p-6 ${highlight ? 'ring-4 ring-blue-500 shadow-xl' : 'shadow-md'} hover:shadow-xl transition-shadow duration-200`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
        <h3 className={`font-bold text-2xl md:text-3xl ${accentColor}`}>{title}</h3>
        <span className={`inline-block mt-2 md:mt-0 px-4 py-2 ${bgColor.replace('100', '200')} rounded-full font-semibold ${accentColor}`}>
          {ageGroup}
        </span>
      </div>
      <p className="text-gray-800 text-lg leading-relaxed">{description}</p>
      {highlight && (
        <div className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg inline-block font-semibold">
          ⭐ Ocebots Competes Here!
        </div>
      )}
    </div>
  );
}

export function CoreValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/95 backdrop-blur rounded-lg p-6 text-center hover:scale-105 transition-transform duration-200 shadow-lg">
      <div className="flex justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-xl md:text-2xl text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}



export function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
      <div className="bitcount-prop-single-ocebots text-4xl md:text-5xl text-white mb-2">{number}</div>
      <div className="text-lg md:text-xl text-white/90 font-semibold">{label}</div>
    </div>
  );
}

export function TimelineItem({ phase, time, description }: { phase: string; time: string; description: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="font-bold text-xl md:text-2xl text-blue-600">{phase}</h3>
          <span className="text-blue-600 font-semibold">{time}</span>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}