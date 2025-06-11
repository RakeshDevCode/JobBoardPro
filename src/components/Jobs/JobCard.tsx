import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Bookmark, Star } from 'lucide-react';
import { Job } from '../../types';

interface JobCardProps {
  job: Job;
  onSave?: (jobId: string) => void;
  saved?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, onSave, saved = false }) => {
  const formatSalary = (min: number, max: number, currency: string) => {
    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
  };

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-100 text-green-800';
      case 'part-time':
        return 'bg-blue-100 text-blue-800';
      case 'contract':
        return 'bg-purple-100 text-purple-800';
      case 'remote':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onSave) {
      onSave(job.id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Job Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {job.featured && (
              <>
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                  FEATURED
                </span>
              </>
            )}
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getJobTypeColor(job.type)}`}>
              {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
            </span>
          </div>
          <Link to={`/jobs/${job.id}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
          </Link>
          <p className="text-gray-600 font-medium mb-1">{job.company}</p>
        </div>
        <button
          onClick={handleSave}
          className={`p-2 rounded-lg transition-colors ${
            saved
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
          }`}
        >
          <Bookmark className={`h-5 w-5 ${saved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Job Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-4 w-4 mr-2" />
          <span className="text-sm">{formatSalary(job.salary.min, job.salary.max, job.salary.currency)}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-2" />
          <span className="text-sm">{job.applicants} applicants</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">
            Posted {Math.floor((new Date().getTime() - job.createdAt.getTime()) / (1000 * 60 * 60 * 24))} days ago
          </span>
        </div>
      </div>

      {/* Job Description Preview */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {job.description.substring(0, 120)}...
      </p>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.categories.slice(0, 3).map((category, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Link
          to={`/jobs/${job.id}`}
          className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View Details
        </Link>
        <Link
          to={`/jobs/${job.id}/apply`}
          className="flex-1 border border-blue-600 text-blue-600 text-center py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;