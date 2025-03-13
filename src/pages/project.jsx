import { useEffect, useRef, useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import {
  useGetAllProjects,
  useGetCompletedProjects,
  useGetCancelledProjects,
  useGetUnderImplementationProjects,
} from '@/API/projectAPI';

const Projects = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [projectType, setProjectType] = useState('all');
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const allProjectsQuery = useGetAllProjects({
    pageNumber: page,
    searchTerm: debouncedSearch,
  });
  const completedProjectsQuery = useGetCompletedProjects({
    pageNumber: page,
    searchTerm: debouncedSearch,
  });
  const cancelledProjectsQuery = useGetCancelledProjects({
    pageNumber: page,
    searchTerm: debouncedSearch,
  });
  const underImplementationProjectsQuery = useGetUnderImplementationProjects({
    pageNumber: page,
    searchTerm: debouncedSearch,
  });

  let projectsQuery;
  if (projectType === 'completed') {
    projectsQuery = completedProjectsQuery;
  } else if (projectType === 'cancelled') {
    projectsQuery = cancelledProjectsQuery;
  } else if (projectType === 'underImplementation') {
    projectsQuery = underImplementationProjectsQuery;
  } else {
    projectsQuery = allProjectsQuery;
  }

  const { data: projects, isLoading } = projectsQuery;
  const projectsData = projects?.data?.items || [];
  const totalPages = projects?.data?.totalPages || 1;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setDebouncedSearch('');
    setProjectType('all');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleProjectTypeChange = (event) => {
    setProjectType(event.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center text-xl font-bold mb-4 hover:bg-blue-600 transition-all">
        صفحة المشاريع
      </h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          ref={inputRef}
          onChange={handleSearchChange}
          placeholder="ابحث عن اسم مشروع..."
          className="border p-2 rounded-lg w-64"
        />
        <button
          onClick={handleClearSearch}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          إلغاء
        </button>

        <select
          value={projectType}
          onChange={handleProjectTypeChange}
          className="border p-2 rounded-lg"
        >
          <option value="all">جميع المشاريع</option>
          <option value="completed">مشاريع مكتملة</option>
          <option value="cancelled">مشاريع ملغاة</option>
          <option value="underImplementation">مشاريع تحت التنفيذ</option>
        </select>
      </div>

      <table className="table-auto border-collapse w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">اسم المشروع</th>
            <th className="border border-gray-300 px-4 py-2">الوصف</th>
            <th className="border border-gray-300 px-4 py-2">حالة المشروع</th>
            <th className="border border-gray-300 px-4 py-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="4" className="text-center py-4">
                يرجى الإنتظار...
              </td>
            </tr>
          ) : projectsData.length > 0 ? (
            projectsData.map((project) => (
              <tr key={project.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {project.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {project.description}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {project.status}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 ml-2">
                    تعديل
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    حذف
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                لا يوجد مشاريع
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination className="mt-4 flex justify-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink href="#" onClick={() => setPage(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page >= totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Projects;
